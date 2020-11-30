let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);
  let notNumber = Number.isNaN(input);

  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}
