var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 400, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillText("Hello World", 250, 250);