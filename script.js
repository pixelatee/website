document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Login successful!');
});

document.getElementById('registerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration successful!');
});

document.getElementById('resetForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Password reset link sent to your phone!');
});
