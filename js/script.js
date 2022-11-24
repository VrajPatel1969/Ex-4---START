var img1 = '<img src="./imgs/face1.png">';
var img2 = '<img src="./imgs/face2.png">';
var img3 = '<img src="./imgs/face3.png">';
var img4 = '<img src="./imgs/body1.png">';
var img5 = '<img src="./imgs/body2.png">';
var img6 = '<img src="./imgs/body3.png">';
var img7 = '<img src="./imgs/legs1.png">';
var img8 = '<img src="./imgs/legs2.png">';
var img9 = '<img src="./imgs/legs3.png">';

var head = [img1, img2, img3]
var torso = [img4, img5, img6]
var legs = [img7, img8, img9]
var colors = ["#FFFF00","#D1D100","#757500","#B2D7DA"]

$(".top").on("click", stickFace);
function stickFace() {
    var random = Math.floor((Math.random() * head.length));
    $(".top").html(head[random]);
}

$(".top").on("click", stickFaceBG);
function stickFaceBG() {
    var random = Math.floor((Math.random() * colors.length));
    $(".top").css("background-color", colors[random])
}

$(".middle").on("click", torsoChange);
function torsoChange() {
    var random = Math.floor((Math.random() * torso.length));
    $(".middle").html(torso[random]);
}

$(".middle").on("click", torsoBG);
function torsoBG() {
    var random = Math.floor((Math.random() * colors.length));
    $(".middle").css("background-color", colors[random])
}

$(".bottom").on("click", legsChange);
function legsChange() {
    var random = Math.floor((Math.random() * legs.length));
    $(".bottom").html(legs[random]);
}
$(".bottom").on("click", legsBG);
function legsBG() {
    var random = Math.floor((Math.random() * colors.length));
    $(".bottom").css("background-color", colors[random])
}

$(document).on("keypress", Pressedkey)
function Pressedkey(e) {
    console.log(e.key)

    if (e.key == '1') {
        stickFace();
        torsoChange();
        legsChange();
    }
    else if (e.key == '2') {
       stickFaceBG();
       torsoBG();
       legsBG();
    }
    else {
        console.log("fail");
    }
}