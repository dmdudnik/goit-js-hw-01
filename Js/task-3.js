const ADMIN_PASSWORD = 'jqueryismyjam';
let inputPass;
let message;

inputPass = prompt('Введите пароль:');

if (inputPass === null) {
  message = 'Отменено пользователем!';
} else if (inputPass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
