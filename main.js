const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const input = userInput.value.trim();
    if (input) {
        appendMessage(input, 'user-message');
        userInput.value = '';

        // Simulação de resposta do ChatGPT
        setTimeout(() => {
            appendMessage('Esta é uma resposta simulada do ChatGPT.', 'bot-message');
        }, 1000);
    }
}

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
