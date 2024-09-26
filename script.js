document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('userForm');
    const greeting = document.getElementById('greeting');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const feeling = document.getElementById('feeling').value.toLowerCase();

        let message = `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}! `;

        if (["happy", "great", "good"].includes(feeling)) {
            message += "I'm glad you're feeling good!";
        } else if (["sad", "bad", "tired"].includes(feeling)) {
            message += "I'm sorry to hear that. I hope your day gets better.";
        } else {
            message += "That's an interesting feeling!";
        }

        greeting.textContent = message;
    });
});
