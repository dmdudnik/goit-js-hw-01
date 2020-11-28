const pricePerDroid = 3000;
const credits = 23580;
let numDroid;
let totalPrice = 0;
let сreditsLeft = 0;
let message;

numDroid = prompt('Введите количество дроидов');

if (numDroid !== null) {
  numDroid = Number(numDroid);
  totalPrice = pricePerDroid * numDroid;
  сreditsLeft = credits - totalPrice;

  message =
    totalPrice <= credits
      ? `Вы купили ${numDroid} дроидов, на счету осталось ${сreditsLeft} кредитов.`
      : 'Недостаточно средств на счету!';
} else {
  message = 'Отменено пользователем!';
}

alert(message);
