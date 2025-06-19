let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");





let getReplayFromChatBot = () => {
    setTimeout(() => {

        let noOfChatbotMsg = chatbotMsgList.length;

        let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsg) - 1];

        let msgContainerEl = document.createElement("div");
        msgContainerEl.classList.add("msg-from-chatbot-container");
        chatContainerEl.appendChild(msgContainerEl);




        let createMsgEl = document.createElement("span");
        createMsgEl.textContent = chatbotMsg;
        createMsgEl.classList.add("msg-from-chatbot");
        msgContainerEl.appendChild(createMsgEl);

    }, 2500); 

}






let sendMsgToContainer = () => {
    let userMsg = userInputEl.value;

    let myContainerEl = document.createElement("div");
    myContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(myContainerEl);



    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    myContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";


    getReplayFromChatBot();

}










sendMsgBtnEl.addEventListener("click", sendMsgToContainer); 

