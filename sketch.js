
var url = window.location.href;

function setup() {
  createCanvas(400, 400);
}

var x = 200;

function draw() {
  background(220);
  fill("pink");
  square(x, 200, 200);

  sendGesture(x);

  x += 1;
}


function sendGesture(data) {
  var outObj = {
    type: "gesture",
    totT: data
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(outObj));
}