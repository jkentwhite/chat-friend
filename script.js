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

    userMessage.addEventListener
    //display message
    const userMessageContainer = document.createElement('div');

    userMessageContainer.classList.add('message');
    userMessageContainer.textContent = userMessage.value;

    chatLog.appendChild(userMessageContainer);

    //scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;

    //process the user input and generate a response
    const response = generateResponse(userMessage.value);
    //display the response
    const responseContainer = document.createElement('div');
    responseContainer.classList.add('message');
    responseContainer.textContent = response;

    chatLog.appendChild(responseContainer);

    //cleasr the input field
    userMessage.value = '';

    //scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;

    function generateResponse(userMessage) {
        return "oh, nothing. just waiting to chat with you!";
    }
}