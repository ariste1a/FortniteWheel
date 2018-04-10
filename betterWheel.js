var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(250, 250, 200, 400, 0, 2 * Math.PI);
// ctx.stroke();

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

var segments =  [
    {'text' : 'Junk Junction'},
    {'text' : 'Haunted Hills'},
    {'text' : 'Wailing Woods'},
    {'text' : 'Lonely Lodge'},
    {'text' : 'Snake Path'},
    {'text' : 'Tomato Town'},
    {'text' : 'Anarchy Acres'},
    {'text' : 'Pleasant Park'},
    {'text' : 'Loot Lake'},
    {'text' : 'Dusty Depot'},
    {'text' : 'Retail Row'},
    {'text' : 'Prison'},
    {'text' : 'Trailer Park'},
    {'text' : 'Tilted Towers'},
    {'text' : 'Snobby Shores'},
    {'text' : 'Greasy Grove'},
    {'text' : 'Shifty Shafts'},
    {'text' : 'Salty Springs'},
    {'text' : 'Flush Factory'},
    {'text' : 'Soccer Field'},
    {'text' : 'Lucky Landing'},
    {'text' : 'Moisty Mire'},
    {'text' : 'South Factory'}
 ]; 

 var colors = [ 
    "#bfd3c6", 
    "#d7caac", 
    "#a2d2a9", 
    "#3a2345"
 ]; 

var segmentsLength = segments.length; 
var currentDegree = 0; 
for(var i = 0; i < segments.length; i++)
{
    ctx.fillStyle = colors[i % colors.length]; 
    var startAngle = currentDegree; 
    var endAngle = currentDegree + (360 / segmentsLength); 
    currentDegree = endAngle;     
    var startAngleRad = degreesToRadians(startAngle); 
    var endAngleRad = degreesToRadians(endAngle); 
    ctx.beginPath(); 
    ctx.moveTo(250, 250);     
    ctx.arc(250, 250, 200, startAngleRad, endAngleRad, false); 
    ctx.closePath();             
    ctx.fill();             
    drawSegmentLabel(c, ctx, ((endAngle - startAngle) / 2) + startAngle, i);     
    segments[i].startAngle = startAngle; 
    segments[i].endAngle = endAngle; 
}

function drawSegmentLabel(canvas, context, degrees, index) {        
    ctx.fillStyle = "#000000";
    context.save();
    var x = Math.floor(canvas.width / 2);
    var y = Math.floor(canvas.height / 2);
    var angle = degreesToRadians(degrees);
 
    context.translate(x, y);
    context.rotate(angle);
    var dx = Math.floor(canvas.width * 0.5) - 10;
    var dy = Math.floor(canvas.height * 0.05);    
    context.textAlign = 'center';    
    context.textBaseline = 'middle';
    var fontSize = Math.floor(canvas.height / 30);
    context.font = fontSize + "pt Helvetica";    
    context.fillText(segments[index].text, 150, 0)
    context.translate(-x,-y);
    context.restore();
 }

 var spinDegree = Math.floor(Math.random() * 359);
 console.log(spinDegree)
 console.log(segments);
 
 TweenMax.to("#canvas", 0.1, {rotation: spinDegree, ease:Linear.easeNone, repeat:0, onComplete: function(){     
    var relativeAngle = Math.floor(270 - spinDegree);
    if (relativeAngle < 0)
    {
        relativeAngle = 360 - Math.abs(relativeAngle);
    }
    for(var i = 0; i < segments.length; i++)
    {
        if(relativeAngle >= segments[i].startAngle && relativeAngle <= segments[i].endAngle)
        {
        document.getElementById("result").innerHTML = segments[i].text;             
        // ctx.fillStyle = "#000000";
        // ctx.beginPath(); 
        // ctx.moveTo(250, 250);     
        // ctx.arc(250, 250, 200, startAngleRad, endAngleRad, false); 
        // ctx.closePath();             
        // ctx.fill();             
        return;
        }
    }     
 }});  