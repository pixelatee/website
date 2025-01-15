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
// Скрипт для кнопки "Назад"
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.addEventListener("click", () => {
            // Возвращаемся на предыдущую страницу
            if (document.referrer) {
                window.history.back();
            } else {
                // Если нет предыдущей страницы в истории, переходим на главную
                window.location.href = "index.html";
            }
        });
    }
});
