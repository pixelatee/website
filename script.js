// Обработчик для формы входа
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Загружаем данные пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверяем соответствие введённых данных
    const user = users.find((u) => u.phone === phone && u.password === password);

    if (user) {
        alert('Вход выполнен успешно!');
        // Здесь можно добавить логику для перехода на личный кабинет
        window.location.href = 'dashboard.html'; // Пример перенаправления
    } else {
        alert('Неправильный номер телефона или пароль!');
    }
});

// Обработчик для формы регистрации
document.getElementById('registerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Проверяем, существуют ли уже данные в localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверяем, есть ли уже пользователь с таким номером телефона
    const existingUser = users.find((u) => u.phone === phone);
    if (existingUser) {
        alert('Пользователь с таким номером телефона уже существует!');
        return;
    }

    // Добавляем нового пользователя
    users.push({ country, phone, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Регистрация успешна!');
    window.location.href = 'login.html'; // Переход на страницу входа
});

// Обработчик для формы сброса пароля
document.getElementById('resetForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const phone = document.getElementById('phone').value;

    // Загружаем данные пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверяем, существует ли пользователь с указанным номером телефона
    const user = users.find((u) => u.phone === phone);

    if (user) {
        alert('Ссылка для сброса пароля отправлена на указанный номер телефона!');
        // Здесь можно добавить логику для фактического сброса пароля
    } else {
        alert('Пользователь с таким номером телефона не найден!');
    }
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
