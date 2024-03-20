// chatbot.js

function initializeChatbot() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');

    const responses = {
        "What is your name": "My name is Chatbot.",
        "How are you": "I'm doing well, thank you!",
        "What time is it": new Date().toLocaleTimeString(),
        "Can you help me": "Of course, I'm here to help!",
    };

    function matchQuestion(userInput) {
        for (const question in responses) {
            if (new RegExp(question, 'i').test(userInput)) {
                return responses[question];
            }
        }
        return "Sorry, I don't understand that question.";
    }

    function addMessage(message, sender) {
        const div = document.createElement('div');
        div.classList.add('message', sender === 'user' ? 'user-message' : 'chatbot-message');
        div.innerText = message;

        // Append message to the bottom
        chatMessages.appendChild(div);

        // Scroll chat messages container to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add initial message
    addMessage("This is Chatbot. Please write something in the box below...", 'chatbot');

    function processUserInput() {
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage(message, 'user');
            const response = matchQuestion(message);
            addMessage(response, 'chatbot');
            userInput.value = '';
        }
    }

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            processUserInput();
        }
    });

    // Start with the chat scrolled to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

window.addEventListener('load', initializeChatbot);
