"use strict";

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "Flappy/images/bird.png";
bg.src = "Flappy/images/bg.png";
fg.src = "Flappy/images/fg.png";
pipeNorth.src = "Flappy/images/pipeNorth.png";
pipeSouth.src = "Flappy/images/pipeSouth.png";

// some variables
var gap = 85;
var constant;
var bX = 10;
var bY = 150;
var gravity = 1.5;
var score = 0;
var lastMessage = "";
let lastMessageTime = null;

// audio files
var fly = new Audio();
var scor = new Audio();

fly.src = "Flappy/sounds/fly.mp3";
scor.src = "Flappy/sounds/score.mp3";

// on key down
document.addEventListener("mousedown", moveUp);

function moveUp() {
 bY -= 25;

 fly.play();
}

// pipe coordinates
var pipe = [];

pipe[0] = {
 x: cvs.width,
 y: 0,
};

// draw images
function draw() {
  ctx.clearRect(0, cvs.height / 2 - 20, cvs.width, 40);
  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
      });
    }

    if (
      (bX + bird.width >= pipe[i].x &&
        bX <= pipe[i].x + pipeNorth.width &&
        (bY <= pipe[i].y + pipeNorth.height ||
          bY + bird.height >= pipe[i].y + constant)) ||
      bY + bird.height >= cvs.height - fg.height
    ) {
      location.reload(); 
    }

    if (pipe[i].x == 5) {
      score++;
      scor.play();
    }

    let messages = ['Fliege weniger!', 'Iss weniger Fleisch!', 'Nutze mehr den ÖPNV!', 'Denk ans Klima!', 'Klimawandel!'];

    if (score % 1 == 0 && score != 0) {
      if (lastMessage !== "" && lastMessageTime !== null && new Date().getTime() - lastMessageTime < 3000) {
        ctx.fillStyle = "#fc583b";
        ctx.font = "bold 20px Verdana";
        ctx.fillText(lastMessage, (cvs.width - ctx.measureText(lastMessage).width) / 2, cvs.height / 2);
      } else {
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];
        ctx.fillStyle = "#fc583b";
        ctx.font = " bold 20px Verdana";
        ctx.fillText(randomMessage, (cvs.width - ctx.measureText(randomMessage).width) / 2, cvs.height / 2);
        lastMessage = randomMessage;
        lastMessageTime = new Date().getTime();
      }
    }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height);
 ctx.drawImage(bird, bX, bY);

 bY += gravity;
 ctx.fillStyle = "#000";
 ctx.font = "20px Verdana";
 ctx.fillText("Score : " + score, 10, cvs.height - 20);
 requestAnimationFrame(draw);
}

draw();