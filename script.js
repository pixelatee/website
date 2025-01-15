// Обработчик для формы входа
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Login successful!');
});

// Обработчик для формы регистрации
document.getElementById('registerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration successful!');
});

// Обработчик для формы сброса пароля
document.getElementById('resetForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Password reset link sent to your phone!');
});

// Добавляем обработчик для кнопки "Назад"
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');

    if (backButton) {
        backButton.addEventListener('click', () => {
            // Возвращаемся на предыдущую страницу
            if (document.referrer) {
                window.history.back();
            } else {
                // Если нет предыдущей страницы, идём на главную
                window.location.href = "index.html";
            }
        });
    }
});
