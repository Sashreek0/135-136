cocossd="";
object = [];
var Status = "";
r=random(255);
b=random(255);
g=random(255);
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();


}

function draw() {
    image(video, 0, 0, 380, 380);

    if (Status != "") {
        Object_detector.detect(video, gotresult);

        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = ("Status :  Objects detected");
            fill(r,g,b);
            document.getElementById("button").innerHTML = ("Number of objects detected are : " + object.length);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill()
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }


}
function modelloaded() {
    console.log("modelloaded");
    Status = true;


}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    }

    console.log(results);
    object = results;



}
function START() {
    Object_detector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status :  Detecting objects";
input=document.getElementById(input-tag).value;
}