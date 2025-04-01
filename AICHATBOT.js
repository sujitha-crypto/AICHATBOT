const chatBox=document.getElementById('chat-box');
const user_input=document.getElementById('user-input');
const responses={'hello':'Hi!how can i assist you?',
    'how are you': 'I\'m doing great,thanks for asking!',
'what is your purpouse':'I\'m here to help answer your questions and provide informations.,'};
function generateResponse(input){
    const response=responses[input.toLowerCase()];
    return response?response:'sorry,I didnt understand that.';
}
function  displayResponse(response){
    const responseElement=document.createElement('div');
    responseElement.textContent=response;
    chatBox.appendChild(responseElement);
    chatBox.scrolldown=chatBox.scrollHeight;
}
document.getElementById('send-btn').addEventListener('click',()=>{
    const userInput=user_input.value.trim();
    if(userInput){
        const response=generateResponse(userInput);
        displayResponse(response);
        user_input.value='';
    }
})