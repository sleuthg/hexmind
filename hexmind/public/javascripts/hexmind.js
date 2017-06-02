// d3.select("body")             // this uses a CSS selector and selects the first instance it finds
//   .append("p")
//   .text("New paragraph!");

// var dataset = [5, 10, 15, 20, 25];
// var dataset = [3,6,45,34,28,84,20,0,23,32,23];

var dataset = [];
for (var i=0; i<25; i++) {
  dataset.push(Math.floor(Math.random()*25)+1);
}

// Add paragraphs inside the .lthex class
// d3.select(".lthex")
//   .selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) { return d; });

// Make a set of bars for a bar chart
// d3.select('.lthex')
//   .selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar")
//   .style("height", function(d) {return d*5 + "px";});

var svg_width = 1000;
var svg_height = 100;

var svg = d3.select(".lthex").append("svg");  // append an svg and return a reference to it

svg.attr("height",svg_height).attr("width",svg_width);

var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

circles.attr("cx",        // loops over all of the circles and manipulates each circle's attributes
  function(d,i) {         // d is the data, i is the index
    return (i*50) + 25;
  })
  .attr("cy", svg_height/2)
  .attr("r", function(d) {
    return d;
  });

// Let's add funky colors
circles.attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", function(d) {return d/2;});


