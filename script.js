const zoomElement = document.querySelector(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.05;


document.addEventListener("wheel", function(e,) {  
    zoom = Math.min(Math.max(1.065, zoom), 4);

    
    if(e.deltaY > 0){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    } 


});



function dissolve(){
    var dissolves = document.querySelectorAll(".dissolve");

    for (var i = 0; i < dissolves.length; i++) {
        let opacity = 1
        opacity = Math.min(Math.max(1, zoom), 0);
        const OPACITY_AMOUNT = 0.04;

    if(zoom > 3){
        dissolveElement.style.opacity = `${opacity -= OPACITY_AMOUNT})`;
    } else { 
        dissolvesElement.style.opacity = `${opacity += OPACITY_AMOUNT})`;

    }
}
}

window.addEventListener("scroll", dissolve);



