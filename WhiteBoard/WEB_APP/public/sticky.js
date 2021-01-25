const addStickyBtn = document.querySelector("#sticky");
const textArea = document.createElement("textarea");

addStickyBtn.addEventListener("click", function(){

        let stickyContent = createSticky();
        
        textArea.setAttribute("cols" , "30");
        textArea.setAttribute("rows" , "10");
        textArea.setAttribute("id" , "sticky-text");
        stickyContent.append(textArea);
});


