// using d3 for convenience
var main = d3.select('main');
var scrolly = main.select('#scrolly');
var figure = scrolly.select('figure');
var article = scrolly.select('article');
var step = article.selectAll('.step');

// initialize the scrollama
var scroller = scrollama();

scroller
   .setup({
      step: '#scrolly article .step',
      offset: 0.9,
      progress: false
      //   debug: true
   })
   .onStepEnter(handleStepEnter);
//    .onStepExit(handleStepExit);

// generic window resize listener event
function handleResize() {
   // 1. update height of step elements
   var stepH = Math.floor(window.innerHeight * 1.1);
   step.style('height', stepH + 'px');

   var figureHeight = window.innerHeight;
   var figureMarginTop = (window.innerHeight - figureHeight) / 4;

   figure.style('height', figureHeight + 'px').style('top', figureMarginTop + 'px');

   // 3. tell scrollama to update new element dimensions
   scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
   console.log(response);
   // response = { element, direction, index }
   if (response.index == 0) {
      setMapStepLayouts();
   } else if (response.index == 1) {
      setMapStepNoiseOne();
   } else if (response.index == 2) {
      setMapStepNoiseTwo();
   } else if (response.index == 3) {
      setMapStepNoiseThree();
   } else if (response.index == 4) {
    setMapStepWalk();
   } else if (response.index == 5) {
    setMapStepWalkTwo();
   } else if (response.index == 6) {
      setMapStepWalkThree();
   }

   step.classed('is-active', function(d, i) {
      return i === response.index;
   });
}

function setupStickyfill() {
   d3.selectAll('.sticky').each(function() {
      Stickyfill.add(this);
   });
}

function init() {
   setupStickyfill();

   // 1. force a resize on load to ensure proper dimensions are sent to scrollama
   handleResize();

   // 2. setup the scroller passing options
   // 		this will also initialize trigger observations
   // 3. bind scrollama event handlers (this can be chained like below)
   scroller
      .setup({
         step: '#scrolly article .step',
         offset: 0.5
      })
      .onStepEnter(handleStepEnter);

   // setup resize event
   window.addEventListener('resize', handleResize);
}

// kick things off
init();