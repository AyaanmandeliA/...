function setup() {
    video = createCapture(VIDEO);
    video.size(396, 396)
    canvas = createCanvas(396, 396);
    canvas.position(410, 151);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", getposes);
}
function draw() {
    background("yellow");
}
function modelLoaded() {
    console.log("model loaded");
}
function getposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}