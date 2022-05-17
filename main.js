noseX=0
noseY=0
leftwristX=0
rightwristX=0
difference=0

function setup() {
    video = createCapture(VIDEO)
    video.size(530, 400)
    canvas = createCanvas(530, 400)
    classifier = ml5.poseNet(video, modelLoaded)
    classifier.on("pose", gotPoses)
}

function draw() {
    background("grey")
    document.getElementById("result").innerHTML="width and height of the square is : "+difference+"px"
    fill("purple")
    stroke("yellow")
    square(noseX , noseY , difference)
}

function modelLoaded() {
    console.log("PoseNet is successfully initialized.")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        console.log(noseX , noseY)

        leftwristX = results[0].pose.leftWrist.x
        rightwristX = results[0].pose.rightWrist.x
        difference= floor(leftwristX - rightwristX)
        console.log(leftwristX , rightwristX , difference)
    }
}