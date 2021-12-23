function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(520, 500);
    canvas.position(600, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);
    }
}
function draw(){
    background('#969A97');
}