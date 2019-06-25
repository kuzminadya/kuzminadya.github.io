var container = d3.select("#scrolly");
var article = container.select("article");
var characters = article.select(".category");
var boxes = article.select(".authors");
var gameboxes = boxes.select(".game-boxes");
var step = article.selectAll(".step");

//game boxes//////////////////////////////////
var boxesSize = Math.round((window.innerWidth - 200) / 12);

// console.log(boxesSize);

var svgBoxAll = d3
  .select("#galleryAllSvg")
  .append("svg")
  .attr("height", "200px")
  .attr("width", "1600px")
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

// var defs = svgBox.append("defs");

////?????????////////

var currentValue = 0,
  duration = 3000,
  newValue = 5;

var svgPercentage = d3
  .select("#svgPercentage")
  .append("svg")
  .attr("width", 200)
  .attr("height", 100);

var numberIncrease = function() {
  svgPercentage
    .append("text", "%")
    .attr("x", "0")
    .attr("y", "0")
    .transition()
    .duration(3500);
  //   .tween("text", function() {
  //     var i = d3.interpolate(currentValue, newValue);
  //     return function(t) {
  //         this.textContent = Math.round(i(t));
  //     };
  // });​
};

var tooltip = d3.select("#tooltipAuth");

var svgChar = d3
  .select(".SvgCharClass")
  .append("svg")
  .attr("height", "500px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneM = d3
  .select("#gallerySvgCharM")
  .append("svg")
  .attr("height", "500px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneW = d3
  .select("#gallerySvgCharW")
  .append("svg")
  .attr("height", "500px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

var svgCharNoneB = d3
  .select("#gallerySvgCharB")
  .append("svg")
  .attr("height", "500px")
  .attr("width", "1000px")
  .attr("x", "180px")
  .append("g")
  .attr("transform", "translate(0,0)");

d3.csv("test.csv", function(err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function(d) {
    d.Number = +d.Number;
    d.NameID = d.NameID;
    d.Name = d.Name;
    d.image_path = d.image_path;
    d.Erscheinungsjahr = d.Erscheinungsjahr;
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

  function svgCharMake() {
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
      .attr("fill", "green");
  }

  var svgCharNoneMen = function() {
    svgChar.selectAll(".char-in-rect").style("fill-opacity", 0);

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
      .style("fill-opacity", 0.75)
      .attr("border-radius", "30")
      .attr("fill", function(d) {
        if (d.Nicht_männliche_C === "nein") {
          return "red";
        } else {
          return "green";
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
      .style("fill-opacity", 0.75)
      .attr("border-radius", "30")
      .attr("fill", function(d) {
        if (d.Nichtweiße_C === "nein") {
          return "red";
        } else if (d.Nichtweiße_C === "x") {
          return "grey";
        } else {
          return "green";
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
      .style("fill-opacity", 0.75)
      .attr("border-radius", "30")
      .attr("fill", function(d) {
        if (d.Nicht_normschön === "nein") {
          return "red";
        } else if (d.Nicht_normschön === "x") {
          return "grey";
        } else {
          return "green";
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
  const scroller = scrollama();

  var activateFunctions = [];
  activateFunctions[0] = numberIncrease;
  activateFunctions[1] = svgCharNoneWhite;
  activateFunctions[2] = svgCharNoneMen;
  activateFunctions[3] = svgCharNoneBeautiful;
  activateFunctions[4] = boxesRender;
  activateFunctions[5] = boxesRenderIll;

  function handleStepEnter(response) {
    console.log(response.index, "-------- enter");
    step.classed("is-active", function(d, i) {
      return i === response.index;
    });

    container.select("div").text(response.index + 1);
    container.call(activateFunctions[response.index]);
  }

  function handleStepProgress(response) {
    var el = d3.select(response.element);

    var val = el.attr("data-step");
    var rgba = "rgba(" + val + ", " + response.progress + ")";
    el.style("background-color", rgba);
    el.select(".progress").text(d3.format(".1%")(response.progress));

    console.log(response);
  }

  function handleStepExit(response) {
    console.log(response.index, "-------- exit");
    response.element.classList.remove("is-active");
  }

  function init() {
    scroller
      .setup({
        container: "#scrolly",
        article: "article",
        percent: ".zero",
        characters: ".category",
        boxes: ".authors",
        step: "#scrolly article .step",
        offset: 0.2,
        debug: true
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit)
      .onStepProgress(handleStepProgress);

    window.addEventListener("resize", scroller.resize);
  }
  init();
});
/////// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

var options = {
  root: document.querySelector("#scrolly"),
  rootMargin: "0px",
  threshold: 1.0
};

// var observer = new IntersectionObserver(callback, options);

// var target = document.querySelector('.step');
// observer.observe(target);
