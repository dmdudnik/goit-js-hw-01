let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);
  const NOT_A_NUMBER = Number.isNaN(input);

  if (NOT_A_NUMBER) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}
