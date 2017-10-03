var xpos = 0;
var xspeed =1;

var ypos = 0;
var yspeed = 10;

var c;

function setup(){
    createCanvas(windowWidth, windowHeight);
    c = color(0,255,0);
}

function draw(){
    
    background(255);
    fill(c);
        
   
    
    ellipse(xpos, ypos,100,100);
    
    if (xpos>= width || xpos<0)
    {
        xspeed = -1 * xspeed;
    }
    
     if (ypos>= height || ypos<0)
    {
        yspeed = yspeed * -1;
    }
    
    
    xpos= xpos+ xspeed;
    ypos= ypos+ yspeed;
    
 
    console.log(ypos);

    if (mouseIsPressed)
        {
            c= color (234, 0, 34);
        }
    else {
            c = color(4, 77, 100)
    }
}


function mousePressed()
{
    c = color(33,77,199);
    
}


function mouseReleased()
{
    c = color(233,77,99);
}


