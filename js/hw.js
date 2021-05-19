// Change code below this line
// const productName = "Droid";
// console.log(productName);
// 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

// TASK 2

//let productName = "Droid";
//let pricePerItem = 2000;

// Change code below this line

// let productName = "Droid";
// productName = "Repair droid";
// console.log(productName);

// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

// TASK 3 (numbers, strings, boules)
// Change code below this line

// const topSpeed = 160;
// let distance = 617.54;
// const login = "mango395";
// const isOnline = true;
// const isAdmin = false;


//TASK 4 (MATH OPERATORS)
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = (pricePerItem * orderedQuantity);
// console.log(totalPrice);


// TASK 5 ( TAMPLATE STRINGS)

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);


// TASK 6 (PRODUCT ORDER)

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
// const message = `You ordered droids worth ${totalPrice}. Delivery (${deliveryFee}
// credits) is included in total price.`;
// console.log(totalPrice);
// console.log(message)


// TASK 7 (FUNCTION DECLARATION AND CALL)

// Задание
// Объяви функцию sayHi, внутри которой добавь console.log() со 
// строкой "Hello, this is my first function!".После объявления
// вызови функцию sayHi.

// function sayHi() {
//   console.log("Hello, this is my first function!")
// }

// sayHi();


// TASK 8 (PARAMETERS AND RESULTS)

// Функция add должна уметь складывать три числа и выводить результат в консоль.Добавь функции add три параметра
// a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где < result > это сумма
// переданных чисел.

// Change code below this line
// function add(a,b,c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10); 
// add(10, 20, 30);
// add(5, 10, 15);


// TASK 9 (RETURN VALUE)
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//   // Change code below this line

// return a+b+c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// TASK 10 (TAMPLATE STRINGS 2.0)
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка
// "You picked <product name>, price per item is <product price> credits",
//   где < product name > и < product price > это значения параметров name и price.
// Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
  
  
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));


                  // TASK 11 (MATHEMATICAL OPERATORS 2.0)
// Функция calculateTotalPrice считает и возвращает общую сумму покупки.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма
// покупки, результат умножения кол - ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(1, 400));
// console.log(calculateTotalPrice(12, 70));


// TASK 12 (PRODUCT ORDER)
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// составляет и возвращает сообщение о покупке ремонтных дроидов.Она объявляет
// три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) 
// is included in total price.".Не забудь о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`



//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));


// TASK 13 (COMPARISON OPERATORS)
// Функция isAdult объявляет один параметр age(возраст), значение которого будет
// задаваться во время её вызова.Присвой переменной passed выражение проверки возраста
// пользователя на совершеннолетие.Человек считается совершеннолетним в возрасте 18 лет и
// старше.

// function isAdult(age) {
//   // Change code below this line
//   const passed = (age >= 18);

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));


// TASK 14 (COMPARSION OPERATORS === and! ==)
// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей
// и возвращает результат проверки - буль true или false.Переменная SAVED_PASSWORD хранит
// значение ранее сохраненного пароля.Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее
// паролей.Результатом выражения проверки должно быть true, если значения совпадают, и
// false, если нет.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch =  password === 'jqueryismyjam';

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"))
// console.log(isValidPassword('jqueryismyjam'))



// TASK 15 (If ... else statement)
// Добавь выражение проверки совершеннолетия пользователя, значения параметра age,
//   в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message
// записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка
// "You are a minor".

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20))
// console.log(checkAge(8))
// console.log(checkAge(14))
// console.log(checkAge(38))


// TASK 16 (warehouse of goods)
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и
// возвращает сообщение о результате.Она объявляет два параметра, значения которых будут
// задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную
// message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, 
// our manager will contact you.".

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available < ordered) {
    message = ('Not enough goods in stock!')
  } else {
    message = ('Order is processed, our manager will contact you.')
  }

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));