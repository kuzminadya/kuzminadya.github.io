var scrolly = d3.select("#scrolly");
/// var Characters
var article = scrolly.selectAll("article");
var figure = article.selectAll(".characters");

/// var Autors
var articleAuth = scrolly.select("#articleAuth");
var boxes = articleAuth.select(".authors");
var gameboxes = boxes.select(".game-boxes");
var step = scrolly.selectAll(".step");

///SVG
var boxesSize = Math.round((window.innerWidth - 200) / 12);

// var defs = svgBox.append("defs");

////?????????////////

// var currentValue = 0,
//   duration = 3000,
//   newValue = 5;

// var svgPercentage = d3
//   .select("#svgPercentage")
//   .append("svg")
//   .attr("width", 200)
//   .attr("height", 100);

// var numberIncrease = function() {
//   svgPercentage
//     // .append("text", "%")
//     .attr("x", "0")
//     .attr("y", "0")
//     .transition()
//     .duration(3500);
//   // .tween("text", function() {
//   //   var i = d3.interpolate(currentValue, newValue);
//   //   return function(t) {
//   //     this.textContent = Math.round(i(t));
//   //   };
//   // });
// };

var tooltip = d3.select("#tooltipAuth");

var svgChar = d3
  .selectAll(".SvgCharClass")
  .append("svg")
  .attr("height", "1000px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneM = d3
  .select("#gallerySvgCharM")
  .append("svg")
  .attr("height", "1000px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneW = d3
  .select("#gallerySvgCharW")
  .append("svg")
  .attr("height", "1000px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneB = d3
  .select("#gallerySvgCharB")
  .append("svg")
  .attr("height", "1000px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgBoxAll = d3
  .selectAll(".galleryAllSvg")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgBoxAuth = d3
  .select("#gallerySvgAuthor")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgBoxIll = d3
  .select("#gallerySvgIllustrators")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%")
  .append("g")
  .attr("transform", "translate(0,0)");

d3.csv("boadrgame-data-test.csv", function(err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function(d) {
    d.Number = +d.Number;
    d.NameID = d.NameID;
    d.Name = d.Name;
    d.image_path = d.image_path;
    d.Erscheinungsjahr = d.Erscheinungsjahr;
    d.menschliche_Darstellungen = d.menschliche_Darstellungen;
    d.Nicht_männliche_C = d.Nicht_männliche_C;
    d.Nichtweiße_C = d.Nichtweiße_C;
    d.Nicht_normschön = d.Nicht_normschön;
    d.Anleitung_gegendert = d.Anleitung_gegendert;

    d.xcoordinate = +d.xcoordinate;
    d.ycoordinate = +d.ycoordinate;
    d.xcoordinate2 = +d.xcoordinate2;
    d.ycoordinate2 = +d.ycoordinate2;
    // console.log(d);
  });

  var svgCharMake = function() {
    svgChar
      .selectAll(".char-in-rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("x", function(d) {
        return d.xcoordinate2 / 3;
      })
      .attr("y", function(d) {
        return d.ycoordinate2 / 2;
      })
      .attr("class", "char-in-rect")
      .attr("width", "50")
      .attr("height", "75px")
      .style("fill-opacity", 1)
      .attr("border-radius", "30")
      .attr("fill", "#0E28EE");
  };

  var svgCharNoneMen = function() {
    // svgChar.selectAll(".char-in-rect").style("fill-opacity", 0);

    svgCharNoneM
      .selectAll(".char-in-rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("x", function(d) {
        return d.xcoordinate2 / 3;
      })
      .attr("y", function(d) {
        return d.ycoordinate2 / 2;
      })
      .attr("class", "char-in-rect")
      .attr("width", "50")
      .attr("height", "75px")
      .style("fill-opacity", 1)
      .attr("border-radius", "30")
      .attr("fill", function(d) {
        if (d.Nicht_männliche_C === "nein") {
          return "#a57c1b";
        } else {
          return "#0E28EE";
        }
      });
  };

  var svgCharNoneWhite = function() {
    svgCharNoneW
      .selectAll(".char-in-rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("x", function(d) {
        return d.xcoordinate2 / 3;
      })
      .attr("y", function(d) {
        return d.ycoordinate2 / 2;
      })
      .attr("class", "char-in-rect")
      .attr("width", "50")
      .attr("height", "75px")
      .style("fill-opacity", 1)
      .attr("border-radius", "30")
      .attr("fill", function(d) {
        if (d.Nichtweiße_C === "nein") {
          return "#a57c1b";
        } else if (d.Nichtweiße_C === "x") {
          return "grey";
        } else {
          return "#0E28EE";
        }
      });
  };

  var svgCharNoneBeautiful = function() {
    svgCharNoneB
      .selectAll(".char-in-rect")
      .data(data)

      .enter()
      .append("rect")
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("x", function(d) {
        return d.xcoordinate2 / 3;
      })
      .attr("y", function(d) {
        return d.ycoordinate2 / 2;
      })
      .attr("class", "char-in-rect")
      .attr("width", "50")
      .attr("height", "75px")
      .style("fill-opacity", 1)
      .attr("border-radius", "30")
      .sort()
      .attr("fill", function(d) {
        if (d.Nicht_normschön === "nein") {
          return "#a57c1b";
        } else if (d.Nicht_normschön === "x") {
          return "grey";
        } else {
          return "#0E28EE";
        }
      });
  };

  var boxesRender = function() {
    svgBoxAuth
      .selectAll(".game-in-rect")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", function(d) {
        return d.image_path;
      })
      .attr("class", "game-in-rect")
      .attr("x", function(d) {
        return d.xcoordinate;
      })
      .attr("y", function(d) {
        return d.ycoordinate;
      })
      .attr("width", boxesSize)
      .attr("height", boxesSize)
      // .on("click", function(d) {})
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  };

  var boxesRenderIll = function() {
    svgBoxIll
      .selectAll(".game-in-rect")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", function(d) {
        return d.image_path;
      })
      .attr("class", "game-in-rect")
      .attr("x", function(d) {
        return d.xcoordinate;
      })
      .attr("y", function(d) {
        return d.ycoordinate;
      })
      .attr("width", boxesSize)
      .attr("height", boxesSize)
      // .on("click", function(d) {})
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  };

  function handleMouseOver(d) {
    tooltip.html(
      "Name: " + d.Name + "<br>" + "Erscheinungsjahr: " + d.Erscheinungsjahr
    );
    tooltip.style("visibility", "visible");
  }
  function handleMouseOut(d) {
    tooltip.style("visibility", "hidden");
  }

  svgCharMake();
  boxesRender();
  // boxesAllRender();

  //scroller////////////////////////////////////////////////////
  // var main = d3.select('main')
  // var scrolly = main.select('#scrolly');
  // var figure = scrolly.select('figure');
  // var article = scrolly.select('article');
  // var step = article.selectAll('.step');

  const scroller = scrollama();

  var activateFunctions = [];
  activateFunctions[0] = svgCharNoneMen;
  activateFunctions[1] = svgCharNoneWhite;
  activateFunctions[2] = svgCharNoneBeautiful;
  activateFunctions[3] = boxesRender;
  activateFunctions[4] = boxesRenderIll;
  activateFunctions[5] = boxesRenderIll;

  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");
    var figureHeight = window.innerHeight / 2;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;
    figure
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");
    // 3. tell scrollama to update new element dimensions
    scroller.resize();
  }
  // scrollama event handlers

  function handleStepEnter(response) {
    console.log(response.index, "-------- enter");
    // response = { element, direction, index }
    // add color to current step only
    step.classed("is-active", function(d, i) {
      return i === response.index;
    });
    // update graphic based on step
    // figure.select("p").text(response.index);
    scrolly.call(activateFunctions[response.index]);
  }
  function setupStickyfill() {
    d3.selectAll(".sticky").each(function() {
      Stickyfill.add(this);
    });
  }
  function handleStepProgress(response) {
    var el = d3.select(response.element);

    // var val = el.attr("data-step");
    // var rgba = "rgba(" + val + ", " + response.progress + ")";
    // el.style("background-color", rgba);
    // el.select(".progress").text(d3.format(".1%")(response.progress));

    console.log(response);
  }

  function handleStepExit(response) {
    console.log(response.index, "-------- exit");
    response.element.classList.remove("is-active");
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
        scrolly: "#scrolly",
        article: "article",
        characters: ".category",
        boxes: ".authors",
        step: "#scrolly .step",
        offset: 0.8,
        debug: true
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit)
      .onStepProgress(handleStepProgress);

    window.addEventListener("resize", scroller.resize);
  }
  // kick things off
  init();
});

//   function handleStepEnter(response) {
//     console.log(response.index, "-------- enter");
//     step.classed("is-active", function(d, i) {
//       return i === response.index;
//     });

//     scrolly.select("div").text(response.index + 1);
//     scrolly.call(activateFunctions[response.index]);
//   }

//   function handleStepProgress(response) {
//     var el = d3.select(response.element);

//     // var val = el.attr("data-step");
//     // var rgba = "rgba(" + val + ", " + response.progress + ")";
//     // el.style("background-color", rgba);
//     // el.select(".progress").text(d3.format(".1%")(response.progress));

//     console.log(response);
//   }

//   function handleStepExit(response) {
//     console.log(response.index, "-------- exit");
//     response.element.classList.remove("is-active");
//   }

//   function init() {
//     scroller
//       .setup({
//         scrolly: "#scrolly",
//         article: "#article",
//         characters: ".category",
//         boxes: ".authors",
//         step: "#scrolly article .step",
//         offset: 0.2,
//         debug: true
//       })
//       .onStepEnter(handleStepEnter)
//       .onStepExit(handleStepExit)
//       .onStepProgress(handleStepProgress);

//     window.addEventListener("resize", scroller.resize);
//   }
//   init();
// });
// /////// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

var options = {
  root: document.querySelector("#scrolly"),
  rootMargin: "0px",
  threshold: 1.0
};

// var observer = new IntersectionObserver(callback, options);

// var target = document.querySelector(".step");
// observer.observe(target);
