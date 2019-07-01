var scrolly = d3.select("#scrolly");
var step = d3.selectAll(".step");
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
var boxesSize = Math.round((window.innerWidth - 200) / 15);

var tooltip = d3.select("#tooltipAuth");

var svgChar = d3
  .selectAll(".SvgCharClass")
  .attr("x", "180px")
  .append("g");

var svgCharNoneM = d3
  .select("#gallerySvgCharM")
  .attr("x", "180px")
  .append("g");

var svgCharNoneW = d3
  .select("#gallerySvgCharW")
  .attr("x", "180px")
  .append("g");

var svgCharNoneB = d3
  .select("#gallerySvgCharB")
  .attr("x", "180px")
  .append("g");

var svgBoxAll = d3.selectAll(".svgBoxesAll").append("g");

var svgBoxAuth = d3.select("#gallerySvgAuthor").append("g");

var svgBoxIll = d3.select("#gallerySvgIllustrators").append("g");

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
    console.log(d);
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
      .attr("class", function(d) {
        if (d.Nicht_männliche_C === "nein") {
          return "Nicht_männliche_C";
        } else {
          return "none_Nicht_männliche_C";
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
      .attr("class", function(d) {
        if (d.Nichtweiße_C === "nein") {
          return "Nichtweiße_C_Y";
        } else if (d.Nichtweiße_C === "x") {
          return "Nichtweiße_C_G";
        } else {
          return "Nichtweiße_C_B";
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
      .attr("class", function(d) {
        if (d.Nicht_normschön === "nein") {
          return "Nicht_normschön_Y";
        } else if (d.Nicht_normschön === "x") {
          return "Nicht_normschön_G";
        } else {
          return "Nicht_normschön_B";
        }
      });
  };

  function handleMouseOver(d) {
    tooltip.html(
      d.Name +
        "<br>" +
        d.Erscheinungsjahr +
        "<br><br>" +
        "Frauen: " +
        d.AutorW +
        "<br>" +
        "Männer: " +
        d.AutorM
    );
    tooltip.style("visibility", "visible");
  }

  function handleMouseMove() {
    return tooltip
      .style("top", d3.event.pageY - 10 + "px")
      .style("left", d3.event.pageX + 10 + "px");
  }

  function handleMouseOut(d) {
    tooltip.style("visibility", "hidden");
  }

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
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);
  }

  var boxesRenderAuth = function() {
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
        return d.xcoordinate + "px";
      })
      .attr("y", function(d) {
        return d.ycoordinate;
      })
      .attr("width", boxesSize)
      .attr("height", boxesSize)
      .attr("class", function(d) {
        if (d.AutorW === 0) {
          return "greyscale";
        }
      })
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
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
      .style("fill-opacity", 1)
      .attr("class", "game-in-rect")
      .attr("x", function(d) {
        return d.xcoordinate + "px";
      })
      .attr("y", function(d) {
        return d.ycoordinate;
      })
      .attr("width", boxesSize)
      .attr("height", boxesSize)
      .attr("class", function(d) {
        if (d.IllustrW === 0) {
          return "greyscale";
        }
      })
      // .on("click", function(d) {})
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);
  };

  // var tool_tip = d3
  //   .tip()
  //   .attr("class", "d3-tip")
  //   .offset([20, 120])
  //   .html(
  //     d.Name +
  //       "<br>" +
  //       d.Erscheinungsjahr +
  //       "<br><br>" +
  //       "Autor*innen :" +
  //       "<br>" +
  //       "<div id='tipDiv'></div><br>"
  //   );

  // scrolly.call(tool_tip);

  // function handleMouseOver(d) {
  //   tool_tip.show();
  //   var tipSVG = d3
  //     .select("#tipDiv")
  //     .append("svg")
  //     .attr("width", 200)
  //     .attr("height", 50);

  //   tipSVG
  //     .append("rect")
  //     .attr("fill", "steelblue")
  //     .attr("y", 10)
  //     .attr("width", 0)
  //     .attr("height", 30)
  //     .transition()
  //     .duration(1000)
  //     .attr("width", d.AutorM);

  // tipSVG.append("text")
  //   .text(d)
  //   .attr("x", 10)
  //   .attr("y", 30)
  //   .transition()
  //   .duration(1000)
  //   .attr("x", 6 + d * 6)
  // }

  // function handleMouseOut(d) {
  //   tool_tip.hide;
  // }

  // + "<img src="d.image_path">"

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
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Jorvik.jpg")
      .attr("x", "130")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
  };

  var mentionTwo = function() {
    mentionTwoContainer
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Winziges_Verlies.jpg")
      .attr("x", "42")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
  };

  var mentionThree = function() {
    mentionThreeContainer
      .append("svg:image")
      .attr("xlink:href", "images/HonorableMention/Wingspan.jpg")
      .attr("x", "130")
      .attr("y", "0")
      .attr("height", "20%")
      .attr("width", "20%");
  };

  function empty() {}

  const scroller = scrollama();

  var activateFunctions = [];
  activateFunctions[0] = empty;
  activateFunctions[1] = svgCharNoneMen;
  activateFunctions[2] = svgCharNoneWhite;
  activateFunctions[3] = svgCharNoneBeautiful;
  activateFunctions[4] = boxesRenderAuth;
  activateFunctions[5] = boxesRenderIll;
  activateFunctions[6] = mentionThree;

  function handleResize() {}
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
        offset: 0.99,
        debug: false
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit)
      .onStepProgress(handleStepProgress);

    window.addEventListener("resize", scroller.resize);
  }
  // kick things off
  init();
});

// /////// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

var options = {
  root: document.querySelector("#scrolly"),
  rootMargin: "0px",
  threshold: 1.0
};

// var observer = new IntersectionObserver(callback, options);

// var target = document.querySelector(".step");
// observer.observe(target);
