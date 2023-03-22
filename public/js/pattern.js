

var canvas = document.getElementById("imgCanvas");
var context = canvas.getContext("2d");

let circleCount = 0;

function createImageOnCanvas(imageId) {
    
    canvas.style.display = "block";
    document.getElementById("images").style.overflowY = "hidden";
    var img = new Image(300, 300);
    img.src = document.getElementById(imageId).src;
    context.drawImage(img, (0), (0)); //onload....
    
}


function draw() {
    if(circleCount==1){
        context.clearRect(0, 0, 300, 300);
        circleCount = 0;
    }
    var e = event;
    var pos = getMousePos(canvas,e);
    posx = pos.x;
    posy = pos.y;

    const coor = document.getElementById("coordinate");
    coor.value = `${posx} ${posy}`;
    console.log(coor.value);
    //console.log(posx,posy);

    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(posx, posy, 10, 0, 2*Math.PI);
    context.fill();
    circleCount = 1;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}