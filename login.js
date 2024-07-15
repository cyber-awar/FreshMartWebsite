document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace with actual user data from your database or secure storage
        const clients = [
            { username: 'client1', password: 'password1' },
            { username: 'client2', password: 'password2' },
			{ username: 'client3', password: 'password3' },
			{ username: 'client4', password: 'password4' },
			{ username: 'client5', password: 'password5' },
			{ username: 'client6', password: 'password6' },
			{ username: 'client7', password: 'password7' },
			{ username: 'client8', password: 'password8' },
			{ username: 'client9', password: 'password9' },
			{ username: 'client10', password: 'password10' }
            // Add more clients as needed
        ];

        const admin = { username: 'admin', password: 'adminpassword' };

        let authenticated = false;

        // Check if the entered credentials match any client
        for (let client of clients) {
            if (username === client.username && password === client.password) {
                authenticated = true;
                break;
            }
        }

        // Check if the entered credentials match the admin
        if (username === admin.username && password === admin.password) {
            authenticated = true;
            // Redirect to admin panel or specific admin page
            window.location.href = 'admin.html';
        }

        if (authenticated) {
            // Redirect to home page or client-specific page
            window.location.href = 'index.html';
        } else {
            loginMessage.textContent = 'Invalid username or password.';
        }
    });
});
