const total = 100;
const ordered = 50;

const message =
  ordered <= total
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

console.log(message);
