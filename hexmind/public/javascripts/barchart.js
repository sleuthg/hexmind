
// Bar Chart Parameters
var svg_width = 700;
var svg_height = 100;
var bar_padding = 1;

// Set up some random data for the bar chart. Values between 1 and 25.
var dataset = [];
for (var i=0; i<25; i++) {
  dataset.push(Math.floor(Math.random()*25)+1);
}

// Create the SVG
var svg = d3.select(".lthex").append("svg");  // append an svg and return a reference to it

svg
  .attr("height",svg_height)
  .attr("width",svg_width);

// Create the bars
bars = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x",function(d,i) {
    return i* (svg_width / dataset.length);
  })
  .attr("y",function(d) {
    return svg_height - 4*d;
  })
  .attr("width", svg_width / dataset.length - bar_padding)
  .attr("height", function(d,i) {
    return 4*d;
  });

// Color the bars
bars
  .attr("fill", function(d) {
    return "rgb(0,0, " + (d*10) + ")";
  });

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("x", function(d,i) {
    return i * (svg_width / dataset.length) + (svg_width / dataset.length - bar_padding) / 2;
  })
  .attr("y", function(d) {
    return svg_height - (d*4) + 14;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");

