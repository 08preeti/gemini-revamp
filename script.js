// Enhanced Theme Toggle with Animation
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.add('theme-transition');
    setTimeout(() => {
        html.classList.remove('theme-transition');
    }, 300);
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-magic"></i>';
        themeToggle.style.background = 'linear-gradient(135deg, #6e8efb, #4facfe)';
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.style.background = 'linear-gradient(135deg, #8ab4f8, #668fff)';
    }
});

// Advanced Chat Functionality
const input = document.querySelector('.input-area input');
const button = document.querySelector('.input-area button');
const chatHistory = document.querySelector('.chat-history');

// Sample AI responses
const aiResponses = [
    "Interesting question! Gemini AI can help with that.",
    "I've analyzed your request and here's what I found...",
    "Based on my knowledge, I'd suggest considering...",
    "That's a great point! Here's some additional information..."
];

button.addEventListener('click', sendMessage);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = input.value.trim();
    if (message) {
        // Add user message with animation
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerHTML = `
            <div class="avatar"><i class="fas fa-user"></i></div>
            <div class="content">${message}</div>
        `;
        chatHistory.appendChild(userMsg);
        
        input.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot';
        typingIndicator.innerHTML = `
            <div class="avatar pulse"><i class="fas fa-robot"></i></div>
            <div class="content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatHistory.appendChild(typingIndicator);
        chatHistory.scrollTop = chatHistory.scrollHeight;
        
        // Simulate AI response after delay
        setTimeout(() => {
            chatHistory.removeChild(typingIndicator);
            
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            const botMsg = document.createElement('div');
            botMsg.className = 'message bot';
            botMsg.innerHTML = `
                <div class="avatar"><i class="fas fa-robot"></i></div>
                <div class="content">${randomResponse}</div>
            `;
            chatHistory.appendChild(botMsg);
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }, 2000);
        
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}