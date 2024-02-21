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


validateCredentials("user", "password");   
validateCredentials("user", "wrongpass");  
validateCredentials("wronguser", "pass"); 
validateCredentials("", "");              
