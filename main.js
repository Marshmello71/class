song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setUp()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('Posenet is loaded')
}
function gotPoses()
{
    if (results)
    {
        console.log(results);
        leftWristX = [0].pose.leftWrist.x
        leftWristY = [0].pose.leftWrist.y
        console.log("leftWristX = " + leftWristX + "LeftWristY = " + leftWristY + "leftWristY")

        rightWristX = [0].pose.rightWrist.x
        rightWristY = [0].pose.rightWrist.y
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY + "rightWristY")
    }
}
function draw()
{
    image(video, 0, 0, 600, 500);

    if (scoreRightWrist < 0.2)
    { 
     circle(RightWristX,rightWristY);
 
     if(rightWristY > 0 && rightWristY <= 100)
     {
         document.getElementById("speed").innerHTML = "Speed = 0.5x";
         song.rate(0.5);
     }
     else if (rightWristY > 100 && rightWristY <= 200)
     {
         document.getElementById("speed").innerHTML = "Speed = 1x";
         song.rate(1);
     }
     else if (rightWristY > 200 && rightWristY <= 300)
     {
         document.getElementById("speed").innerHTML = "Speed = 1.5x";
         song.rate(1.5);
     }    
     else if (rightWristY > 300 && rightWristY <= 400)
     {
         document.getElementById("speed").innerHTML = "Speed = 2x";
         song.rate(2);
     }    
     else if (rightWristY > 400 && rightWristY <= 500)
     {
         document.getElementById("speed").innerHTML = "Speed = 2x";
         song.rate(2);
     }    
    } 
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
