document.getElementById('sign-in').style.display = 'block';

function showSignUp() {
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('sign-up').style.display = 'block';
}

function showSignIn() {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
}

function signIn() {
    // Add logic for sign in
    showDashboard();
}

function signUp() {
    // Add logic for sign up
    showDashboard();
}

function sendOtp() {
    // Add logic for sending OTP
    alert('OTP sent!');
}

function showDashboard() {
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('sign-up').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    showPage('news');
}

function showPage(page) {
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(page).style.display = 'block';
}

function showSellingOption(option) {
    document.querySelectorAll('.selling-option').forEach(option => {
        option.style.display = 'none';
    });
    document.getElementById(option).style.display = 'block';
}

function showChatBotOption(option) {
    document.querySelectorAll('.chatbot-option').forEach(option => {
        option.style.display = 'none';
    });
    document.getElementById(option).style.display = 'block';
}
