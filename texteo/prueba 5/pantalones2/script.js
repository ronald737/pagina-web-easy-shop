/* Youtube Link: https://www.youtube.com/watch?v=i7bW41JTL8U */
/* Created by Truzz Blogg */
/* https://www.youtube.com/c/TruzzBlogg/videos */

let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let yellowBtn = document.getElementById("yellow");
let greenBtn = document.getElementById("green");
let brownBtn = document.getElementById("brown");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function() {

    imgchange.src = "./images/pantalones/Pdiseño2rojo.png";
}

blueBtn.onclick = function() {
    imgchange.src = "./images/pantalones/Pdiseño2azul.png";
}

yellowBtn.onclick = function() {
    imgchange.src = "./images/pantalones/Pdiseño2amarillo.png";
}

greenBtn.onclick = function() {
    imgchange.src = "./images/pantalones/Pdiseño2verde.png";
}

brownBtn.onclick = function() {
    imgchange.src = "./images/pantalones/Pdiseño2marron.png";
}

