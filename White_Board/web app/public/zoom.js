const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");

zoomIn.addEventListener("click", function(){
    console.log("hello zoomIn");
    zoomin();
})
zoomOut.addEventListener("click", function(){
    console.log("hello zoomOut");
    zoomout();
})



function zoomin() { 
    let org = document.getElementById("canvas"); 
    let currHeight = org.clientHeight; 
    org.style.height = (currHeight + 40) + "px"; 
} 
function zoomout() { 
    let org = document.getElementById("canvas"); 
    let currHeight = org.clientHeight; 
    org.style.height = (currHeight - 40) + "px"; 
}