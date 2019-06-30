var scrolly = d3.select("#scrolly");
var step = scrolly.selectAll(".step");
/// var Characters
var article = scrolly.selectAll("article");
var figure = article.selectAll(".characters");

/// var Autors
// var articleAuth = scrolly.select("#articleAuth");
// var boxes = articleAuth.select(".authors");
// var gameboxes = boxes.selectAll(".game-boxes");

/// var Auth and Ill
var boxes = scrolly.selectAll(".svgBoxesAll");

///SVG
var boxesSize = Math.round((window.innerWidth - 200) / 12);

scrolly
  .append("filter")
  .attr("id", "desaturate")
  .append("feColorMatrix")
  .attr("type", "matrix")
  .attr(
    "values",
    "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0  0      0      0      1 0"
  );

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
  .selectAll(".svgBoxesAll")
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

d3.csv("boadrgame-data2ver-test.csv", function(err, data) {
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
    d.AutorM = +d.AutorM;
    d.AutorW = +d.AutorW;
    d.IllustrM = +d.IllustrM;
    d.IllustrW = +d.IllustrW;

    d.xcoordinate = +d.xcoordinate;
    d.ycoordinate = +d.ycoordinate;
    d.xcoordinate2 = +d.xcoordinate2;
    d.ycoordinate2 = +d.ycoordinate2;
    console.log(d.AutorW);
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

  function boxesRenderMake() {
    svgBoxAll
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
  }

  //Container for the gradients
  // var defs = svgBoxAuth.append("defs");

  // var filter = defs.append("filter").attr("id", "grayscale");

  var boxesRenderAuth = function() {
    // svgBoxAll
    //   .selectAll(".game-in-rect")
    //   .data(data)
    //   .enter()
    //   .style("fill-opacity", 0);

    svgBoxAuth
      .selectAll(".game-in-rect")
      .data(data)
      .enter()
      .append("image")
      .attr("xlink:href", function(d) {
        return d.image_path;
      })
      .style("fill-opacity", 0)
      .attr("class", "game-in-rect")
      .attr("x", function(d) {
        return d.xcoordinate + 100 + "px";
      })
      .attr("y", function(d) {
        return d.ycoordinate;
      })
      .attr("width", boxesSize)
      .attr("height", boxesSize)
      .attr("class", function(d) {
        if (d.AutorW === "0") {
          return "greyscale";
        }
      })
      .style("filter", function(d) {
        if (d.AutorW === "0") {
          return "filter", "url(#desaturate)";
        } else {
          return "";
        }
      })
      .style("fill-opacity", function(d) {
        if (d.AutorW === "0") {
          return "0.1";
        }
      })
      // .on("click", function(d) {})
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  };

  var boxesRenderIll = function() {
    // svgBoxAll
    //   .selectAll(".game-in-rect")
    //   .data(data)
    //   .enter()
    //   .style("fill-opacity", 0);

    svgBoxIll
      .selectAll(".game-in-rect")
      .data(data)
      .enter()
      .append("image")

      .attr("xlink:href", function(d) {
        return d.image_path;
      })
      .style("fill-opacity", 1)
      .attr("class", "game-in-rect")
      .attr("x", function(d) {
        return d.xcoordinate + 100 + "px";
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
  // boxesRender();
  boxesRenderMake();
  // boxesAllRender();

  // var imgContainer = svg.append("g").attr("transform", "translate(228,53)");

  var widthImage = "200px";
  var heightImage = "200px";

  // var img = imgContainer
  //   .append("svg:image")
  //   .attr("xlink:href", "marker.svg")
  //   .attr("width", widthMarker)
  //   .attr("height", widthMarker);

  // var text = imgContainer
  //   .append("svg:text")
  //   .attr("dy", widthMarker / 2)
  //   .text("hello world");

  // text.attr("dx", (widthMarker - text.node().getComputedTextLength()) / 2);

  var mentionOneContainer = d3
    .select("#mention1")
    .append("svg")
    .attr("height", widthImage)
    .attr("width", heightImage)
    .attr("x", "0px")
    .append("g");

  var mentionTwoContainer = d3
    .select("#mention2")
    .append("svg")
    .attr("height", "200px")
    .attr("width", "200px")
    .attr("x", "0px")
    .append("g");

  var mentionThreeContainer = d3
    .select("#mention3")
    .append("svg")
    .attr("height", "200px")
    .attr("width", "200px")
    .attr("x", "0px")
    .append("g");

  var mentionOne = function() {
    mentionOneContainer
      // .append("div")
      // .attr("height", "200px")
      // .attr("width", "200px")
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Jorvik.jpg")
      .attr("x", "130")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
    //   .style("text-anchor", "middle")
    //   .style("font-family", "sans-serif")
    //   .style("font-size", 12)
    //   .text(
    //     "Jórvík - Ursprünglich 2010 unter dem Titel “Die Speicherstadt” bei eggertspiele erschienen, ist die Neuauflage Jórvík, jetzt im Verlag Pegasus Spiele, etwas besonderes. Anders als als bei allen anderen Spielen benutzt die Anleitung durch die weibliche vorm, spricht also von Spielerinnen und schafft es damit zumindest mit seinen Mitspieler*innen übers gendern in Anleitungen ins Gespräch zu kommen."
    //   );

    // mentionOneContainer
    //   .append("svg:text")
    //   .attr("dy", "50px")
    //   .text(
    //     "Jórvík - Ursprünglich 2010 unter dem Titel “Die Speicherstadt” bei eggertspiele erschienen, ist die Neuauflage Jórvík, jetzt im Verlag Pegasus Spiele, etwas besonderes. Anders als als bei allen anderen Spielen benutzt die Anleitung durch die weibliche vorm, spricht also von Spielerinnen und schafft es damit zumindest mit seinen Mitspieler*innen übers gendern in Anleitungen ins Gespräch zu kommen."
    //   )
    //   .style("font-family", "sans-serif")
    //   .style("font-size", 12);
  };

  var mentionTwo = function() {
    mentionTwoContainer
      // .append("div")
      // .attr("height", "200px")
      // .attr("width", "200px")
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Winziges_Verlies.jpg")
      .attr("x", "42")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
  };

  var mentionThree = function() {
    mentionThreeContainer
      // .append("div")
      // .attr("height", "200px")
      // .attr("width", "200px")
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Wingspan.jpg")
      .attr("x", "130")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
  };

  const scroller = scrollama();

  var activateFunctions = [];
  activateFunctions[0] = mentionOne;
  activateFunctions[1] = svgCharNoneMen;
  activateFunctions[2] = svgCharNoneWhite;
  activateFunctions[3] = svgCharNoneBeautiful;
  activateFunctions[4] = mentionTwo;
  activateFunctions[5] = boxesRenderAuth;
  activateFunctions[6] = boxesRenderIll;
  activateFunctions[7] = mentionThree;
  // activateFunctions[5] = boxesRenderIll;

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
        boxes: ".game-boxes",
        step: "#scrolly .step",
        offset: 0.6,
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
