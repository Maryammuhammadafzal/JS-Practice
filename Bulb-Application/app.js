
var bulbOf = document.getElementById('bulb-off');

function bulbon(){
    bulbOf.src = "image/bulb-on-image.png"
    document.getElementById('off-btn').disabled = false;
}


function bulboff(){
    bulbOf.src = "image/bulb-off-image.jpg"
}

