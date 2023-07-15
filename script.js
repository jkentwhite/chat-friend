window.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        console.log(event.key);
        event.preventDefault();
        sendMessage();
    }
})

function sendMessage() {
    const userMessage = document.getElementById('user-message');
    const chatLog = document.getElementById('chat-log');

    if(!userMessage.value) return;
    //display message
    const userMessageContainer = document.createElement('div');

    userMessageContainer.classList.add('message');
    userMessageContainer.classList.add('right-align');
    userMessageContainer.textContent = `${userMessage.value}\n`;

    chatLog.appendChild(userMessageContainer);

    //scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;

    //process the user input and generate a response
    const response = generateResponse(userMessage.value);
    //display the response
    const responseContainer = document.createElement('div');
    responseContainer.classList.add('message');
    responseContainer.classList.add('left-align');
    responseContainer.textContent = `${response}\n\r`;

    chatLog.appendChild(responseContainer);

    //cleasr the input field
    userMessage.value = '';

    //scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;

    function generateResponse(userMessage) {
        //generative response based on sentiment of user input
        //using LLM 
        return "oh, nothing. just waiting to chat with you!";
    }
}