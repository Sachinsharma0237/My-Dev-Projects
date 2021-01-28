const shape = document.querySelector("#shape");
const shapeOptions = document.querySelector("#shapeOptions");
const myShape = document.querySelector("#myShape");
const circleShape = document.querySelector("#circleShape");
const squareShape = document.querySelector("#squareShape");
const ovalShape = document.querySelector("#ovalShape");
const traingleShape = document.querySelector("#traingleShape");

shape.addEventListener("click", function(){
    if (shape.classList.contains("active-tool")) {
        if (shapeOptions.classList.contains("hide")) {
            shapeOptions.classList.remove("hide");
        }
        else {
            shapeOptions.classList.add("hide");
        }
    } else {
        if(!pencilOptions.classList.contains("hide") || !eraserOptions.classList.contains("hide") || !cornerOptions.classList.contains("hide")   ){
            pencilOptions.classList.add("hide");
            eraserOptions.classList.add("hide");
            cornerOptions.classList.add("hide");
        }
        pencil.classList.remove("active-tool");
        eraser.classList.remove("active-tool");
        corner.classList.remove("active-tool");
        shape.classList.add("active-tool");
    }
});




