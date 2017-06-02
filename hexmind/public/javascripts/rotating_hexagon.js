// Bar Chart Parameters
var svg_width = 1000;
var svg_height = 500;

var svg = d3
  .select('.lthex')
  .append('svg')
  .attr("width",svg_width)
  .attr("height",svg_height);

// var hexData = [initHexStruct(300,300,100)];
var pointData = [createHex(300,300,100)];

var hexes = svg.selectAll("path.area")
  .data(pointData)
  .enter()
  .append("path")
  .attr("fill", "#ff0000")
  .attr("d", d3.line())
  .attr("stroke-width", 0)
  .attr("stroke", "blue");

hexes
  // .transition()   // Fade to green
  // .attr("fill", "green")
  // .transition()   // Fade to red
  // .attr("fill", "red")
  // .transition()   // Wait one second, then fade to brown
  // .delay(1000)
  // .attr("fill", "brown")
  .transition()  // Move to the right 100 px
  .attr("d", function(d) {
    for (var i=0;i<d.length;i++) {
      d[i][0] += 100;
    }
    return d;
  })
  .attr("d", d3.line());