rightWristX= 0;
leftWristX= 0;
difference= 0;

function setup()
{
    canvas= createCanvas(400, 400);
    canvas.position(700, 100);

    video= createCapture(VIDEO);
    video.size(550, 500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('pose net is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }

}

function draw()
{
    background('#349ceb');
    document.getElementById("font_size").innerHTML= "font size of the text will be ="+difference+"px";
    textSize(difference);
    fill('#ebc334');
    text('Devansh', 200, 200);
    
}