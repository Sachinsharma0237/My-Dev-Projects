socket.on("chat-join", function(userName){
    let chat = document.createElement("div");
        chat.classList.add("join");
        chat.innerHTML = userName + " joined the chat !";
        chatList.append(chat);
    let user = document.createElement("div");
        user.classList.add("online");
        user.innerHTML = userName;
        onlineBox.append(user);
});

socket.on("offline" , function(sid){
    let offlineUser = document.querySelector(`div[sid=${sid}]`);
    offlineUser.remove();
})

socket.on("chat-left", function(messageObj){
    let chat = document.createElement("div");
        chat.classList.add("chat");
        chat.classList.add("left");
        chat.innerHTML = messageObj.userName + ":" + messageObj.message ;
        chatList.append(chat);
});
socket.on("leave", function(userName){
    let chat = document.createElement("div");
        chat.classList.add("leave");
        chat.innerHTML = userName + " left the chat !";
        chatList.append(chat);
});
socket.on("online-list", function(users){
    console.log(users);
    for(let i = 0; i < users.length; i++){
        let user = document.createElement("div");
            user.classList.add("online");
            user.innerHTML = users[i].userName;
            user.setAttribute("sid", users[i].id);
            onlineBox.append(user);
    }
});
