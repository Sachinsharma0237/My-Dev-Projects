const input = document.querySelector("#input");
const block = document.querySelector("#block");
const sites = document.querySelector(".sites");
const closeButton = document.querySelector("#closeButton");
let db = [];
input.addEventListener("keyup", function(e){
    if( e.keyCode == 13 ){
        block.click();
    }
})


block.addEventListener("click", function(){
    let text = input.value;
    if(text){
        db.push(text);
        let site = document.createElement("div");
        site.classList.add("alert");
        site.classList.add("alert-danger");
        site.innerHTML = text;
        let closeButton = document.createElement("div");
        closeButton.classList.add("btn");
        closeButton.classList.add("btn-outline-danger");
        closeButton.innerHTML = "X";
        site.append(closeButton);
        sites.append(site);
        input.value = "";
        closeButton.addEventListener("click", function(){
            closeButton.parentNode.remove();    // site.remove();
            db.pop();
        })
    }

});