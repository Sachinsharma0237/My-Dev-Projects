const shape = document.querySelector("#shape");
const shapeOptions = document.querySelector("#shapeOptions");
const myShape = document.querySelector(".myShape");
const circleShape = document.querySelector(".circleShape");
const squareShape = document.querySelector(".squareShape");
const ovalShape = document.querySelector(".ovalShape");
const triangleShape = document.querySelector(".triangleShape");

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

circleShape.addEventListener("click", function(){
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.arc(100, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();
});
squareShape.addEventListener("click", function(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.strokeRect(10, 100, 180, 180);
});
ovalShape.addEventListener("click", function(){
    ctx.beginPath();
    ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
});
triangleShape.addEventListener("click", function(){
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
});


