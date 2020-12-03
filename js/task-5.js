let country;
let countryName;
const CHINA_DELIVERY_COUNT = 100;
const CHILE_DELIVERY_COUNT = 250;
const AUSTRALIA_DELIVERY_COUNT = 170;
const INDIA_DELIVERY_COUNT = 80;
const JAMAICA_DELIVERY_COUNT = 120;
let message;

country = prompt('Введите страну доставки');
if (country !== null) {
  country = country.toLowerCase();
  countryName = country[0].toUpperCase() + country.slice(1);
}

switch (country) {
  case 'китай': {
    message = `Доставка в ${countryName} будет стоить ${CHINA_DELIVERY_COUNT} кредитов`;
    break;
  }
  case 'чили': {
    message = `Доставка в ${countryName} будет стоить ${CHILE_DELIVERY_COUNT} кредитов`;
    break;
  }
  case 'австралия': {
    message = `Доставка в ${countryName} будет стоить ${AUSTRALIA_DELIVERY_COUNT} кредитов`;
    break;
  }
  case 'индия': {
    message = `Доставка в ${countryName} будет стоить ${INDIA_DELIVERY_COUNT} кредитов`;
    break;
  }
  case 'ямайка': {
    message = `Доставка в ${countryName} будет стоить ${JAMAICA_DELIVERY_COUNT} кредитов`;
    break;
  }
  default: {
    message = 'В вашей стране доставка не доступна';
  }
}

alert(message);
