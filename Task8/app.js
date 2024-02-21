function validateCredentials(username, password) {
    const validUsername = "user";
    const validPassword = "password";

    if (!username || !password) {
        console.log("Ошибка Валидации");
    } else if (username === validUsername && password === validPassword) {
        console.log("Привет");
    } else if (username === validUsername) {
        console.log("Неправильный пароль");
    } else {
        console.log("Неправильный username");
    }
}

// Пример использования функции с разными входными данными
validateCredentials("user", "password");   // Вывод: Привет
validateCredentials("user", "wrongpass");  // Вывод: Неправильный пароль
validateCredentials("wronguser", "pass");  // Вывод: Неправильный username
validateCredentials("", "");               // Вывод: Ошибка Валидации
