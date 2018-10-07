function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    // top of triangle is x1, y1
    // bottom of triange is x2, y2, x3, y3
    var x1 = x[i];
    var y1 = y[i]-10-i/2;
    var x2 = x1-10-i;
    var y2 = y1+10+i;
    var x3 = x1+10+i;
    var y3 = y1+10+i;
    triangle(x1,y1,x2,y2,x3,y3);
   // rect(x[i], y[i], 1 + (x.length - i,1 + (x.length - i)));
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
