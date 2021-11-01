function preload(){

}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 450, 450);
}

function save(){
    save("daBaby.png");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        console.log("Nose y = "+results[0].pose.nose.y);
        console.log("Nose x= "+results[0].pose.nose.x) 
    }
}