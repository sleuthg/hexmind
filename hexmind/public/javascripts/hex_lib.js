// creates data points for a hexagon of radius r, centered at x,y
var createHex = function(x,y,r) {
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

// This structure preserves the x,y,r information to be used
// for creating rotations and other transformations
var initHexStruct = function(x,y,r) {
  return {
    x:x,
    y:y,
    r:r,
    dataPoints:createHex(x,y,r)
  };
};

// creates a grid of hexagons
var createHexGrid = function(Nx,Ny,r) {
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

// rotate
//var rotateHex()