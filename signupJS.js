// Функція для перемикання видимості пароля
function toggleSignupPassword() {
    // Отримуємо елемент поля пароля за його id
    const signupPasswordField = document.getElementById("signup-password");
    // Отримуємо елемент іконки видимості пароля
    const signupEyeIcon = document.querySelector(".toggle-password i");

    // Перевіряємо, чи тип поля вводу "password"
    if (signupPasswordField.type === "password") {
        // Якщо так, змінюємо тип на "text" (робимо пароль видимим)
        signupPasswordField.type = "text";
        // Заміщаємо іконку на іконку зі скасуванням видимості
        signupEyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        // Змінюємо колір іконки на темно-синій
        signupEyeIcon.style.color = "#003f5c";
    } else {
        // Якщо тип вже "text", змінюємо його назад на "password"
        signupPasswordField.type = "password";
        // Заміщаємо іконку назад на стандартну іконку видимості
        signupEyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        // Змінюємо колір іконки на блакитний
        signupEyeIcon.style.color = "#5f9ea0";
    }
}

// Функція для перевірки правильності введених даних у формі
function validateSignupForm(event) {
    // Запобігаємо стандартному відправленню форми
    event.preventDefault();
    // Отримуємо значення полів введення
    const signupUsername = document.getElementById("signup-username").value;
    const signupPassword = document.getElementById("signup-password").value;
    // Отримуємо елемент для показу повідомлення про помилку
    const signupErrorMessage = document.getElementById("signup-error-message");

    // Регулярний вираз для перевірки логіна (мінімум 5 символів, латинські букви та цифри)
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
    // Регулярний вираз для перевірки пароля (мінімум 8 символів, латинські букви, цифри та спецсимволи)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Перевірка, чи не порожнє поле для логіна
    if (!signupUsername) {
        // Якщо порожнє, виводимо повідомлення про помилку
        signupErrorMessage.textContent = "Поле 'Ім'я користувача' не може бути порожнім.";
        signupErrorMessage.style.display = "block"; // Показуємо повідомлення
    // Перевірка, чи логін відповідає регулярному виразу
    } else if (!usernameRegex.test(signupUsername)) {
        signupErrorMessage.textContent = "Логін повинен містити мінімум 5 символів, включаючи латинські букви та цифри.";
        signupErrorMessage.style.display = "block";
    // Перевірка, чи не порожнє поле для пароля
    } else if (!signupPassword) {
        signupErrorMessage.textContent = "Поле 'Пароль' не може бути порожнім.";
        signupErrorMessage.style.display = "block";
    // Перевірка, чи пароль відповідає регулярному виразу
    } else if (!passwordRegex.test(signupPassword)) {
        signupErrorMessage.textContent = "Пароль повинен містити мінімум 8 символів, включаючи латинські букви, цифри та спеціальні символи.";
        signupErrorMessage.style.display = "block";
    } else {
        // Якщо всі перевірки пройдені успішно, ховаємо повідомлення про помилку
        signupErrorMessage.style.display = "none";
        // Виводимо підтвердження успішної реєстрації
        if (confirm("Успішна реєстрація!")) {
            // Перезавантажуємо сторінку після підтвердження
            location.reload();
        }
    }
}

// Додаємо слухача події на форму для обробки події submit
document.getElementById("signup-form").addEventListener("submit", validateSignupForm);
