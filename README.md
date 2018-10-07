# homework4

38 lines are drawn in each frame because the frame is 400 wide and each line is 10 apart. There are 38 lines instead of 40 lines because the lines begin and end 10 after and before the frame. one line is drawn everytime the for loop is run.

the first 10 tells us where the first line begins. the second 10 tells us how far from the right end of the canvas the last line ends. and the last 10 tells us how far apart the lines are. 


The loop body is ran 5 times. 

 ellipse(x[i], y[i], 1 + 2*(50 - i));
  }
   for (var i = 0; i < 100; i = i + 20) {
    ellipse(x[i/2], y[i/2], 1 + (100 - i));
  }

 beginShape();
  for (var i = 0; i < 100; i = i + 20) {
  //  ellipse(x[i/2], y[i/2], 1 + (100 - i));
  vertex(pos.x,pos.y);
  }
  endShape();
