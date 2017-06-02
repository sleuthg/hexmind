
// Bar Chart Parameters
var svg_width = 1000;
var svg_height = 500;

var svg = d3
  .select('.lthex')
  .append('svg')
  .attr("width",svg_width)
  .attr("height",svg_height);

// creates data points for a hexagon of radius r, centered at x,y
createHex = function(x,y,r) {
  var h = (Math.sqrt(3)/2);
  return [
    [ r+x,    y      ],
    [ r/2+x,  r*h+y  ],
    [ -r/2+x, r*h+y  ],
    [ -r+x,   y      ],
    [ -r/2+x, -r*h+y ],
    [ r/2+x,  -r*h+y ],
    [ r+x,    y      ],  // closes the hex
    [ r/2+x,  r*h+y  ]   // makes the lines fully close when rendered @todo there's probably a much better way to do this
  ]
};

// creates a grid of hexagons
createHexGrid = function(Nx,Ny,r) {
  var hexgrid=[];
  var dx = r*(1+Math.sin(Math.PI/6));
  var dy = r*Math.cos(Math.PI/6);
  var x0 = dx;
  var y0 = 1.5*dy;
  for (var i=0; i<Nx; i++) {
    for (var j=0; j<Ny; j++) {
      if (i%2) {
        hexgrid.push(createHex(dx * i + x0, 2 * dy * j + y0, r));
      } else {
        hexgrid.push(createHex(dx * i + x0, 2 * dy * j + dy + y0, r));
      }
    }
  }
  return hexgrid;
};

var pointData = createHexGrid(6,4,50);

var hexes = svg.selectAll("path.area")
  .data(pointData)
  .enter()
  .append("path")
  .attr("fill", "#ff0000")
  .attr("d", d3.line())
  .attr("stroke-width", 0)
  .attr("stroke", "blue");

var dataset = [];
for (var i=0; i<pointData.length; i++) {
  dataset.push(Math.floor(Math.random()*255));
}

hexes
  .attr("fill", function(d,i) {
    return "rgb(" + dataset[i] + ",0,0)";
  })
  .on('click', function(d,i) {
    console.log("The " + i + " value is:");
    console.log(d)
  });
