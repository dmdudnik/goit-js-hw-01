const PRICE_PER_DROID = 3000;
const CREDITS = 23580;
let numDroid;
let totalPrice = 0;
let сreditsLeft = 0;
let message;

numDroid = prompt('Введите количество дроидов');

if (numDroid !== null) {
  numDroid = Number(numDroid);
  totalPrice = PRICE_PER_DROID * numDroid;
  сreditsLeft = CREDITS - totalPrice;

  message =
    totalPrice <= CREDITS
      ? `Вы купили ${numDroid} дроидов, на счету осталось ${сreditsLeft} кредитов.`
      : 'Недостаточно средств на счету!';
} else {
  message = 'Отменено пользователем!';
}

alert(message);
