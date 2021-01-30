console.log("hi I'm content file");

let localImages = ["./images/download1.jpg", "./images/download2.jpg","./images/download3.jpg","./images/download4.jpg","./images/download5.jpg","./images/download6.jpg","./images/download7.jpg","./images/download8.jpg","./images/download9.jpg"];
let images = document.querySelectorAll("img");

for(let i = 0; i < images.length; i++){
    let idx = Math.floor(Math.random() * localImages.length);
    console.log(idx);
    let absolutePath = chrome.extension.getURL(localImages[idx]);
    images[i].src = absolutePath;
}