
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let turn = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('paint');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
<<<<<<< HEAD
  if (isDrawing === true&& turn == true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,true);
=======
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
>>>>>>> f3dc3692e745abc6ee710cfef97317036b6f2aaa
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
<<<<<<< HEAD
  if (isDrawing === true&& turn == true) {
    drawLine(context, x, y, e.offsetX, e.offsetY,true);
=======
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
>>>>>>> f3dc3692e745abc6ee710cfef97317036b6f2aaa
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2,sendToServer) {
  context.beginPath();
  context.lineWidth = 3;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  if (sendToServer) {
    socket.emit("drawSendToServer",{
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
    })
  }
}

context.strokeStyle = 'black';

const colorPicker = [...document.querySelectorAll(".colors")]
colorPicker.forEach(colorPicker => {
    colorPicker.addEventListener('click',(e) =>{
        context.strokeStyle = e.target.style.backgroundColor
    })
})

//clear all stroke in canvas area

document.querySelector('#btn-clear').addEventListener('click',(e) =>{
  context.clearRect(0,0,800,500)
})

socket.on("draw",(data)=>{
  console.log(1)
  drawLine(context,data.x1,data.y1,data.x2,data.y2,false);
})