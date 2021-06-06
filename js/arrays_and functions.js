// TASK 1(Early return)
// Запиши условие в инструкции if так, чтобы функция работала правильно.
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));


// TASK 2 (password verification (early return))
// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной
// ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний
// возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// TASK 3 (warehouse of goods 3.0)
// Функция checkStorage проверяет возможность оформления заказа и возвращает
// сообщение о результате.Она принимает два параметра, значения которых будут
// задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний
// возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return  "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you" 

//     // return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// TASK 4(Array creation)
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear"
// и "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange']


//TASK 5(Accessing elements by index)  
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных
// скобок.

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits.length)
// const firstElement = console.log(fruits[0]);
// const secondElement = console.log(fruits[1]);
// const lastElement = console.log(fruits[3]);

// TASK 6 (Overriding the value of an element)
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach",
// а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// console.log(fruits[1] = 'peach');
// console.log(fruits[3] = 'banana');


// TASK 7 (Array length)
// Объяви переменную fruitsArrayLength и присвой ей длину
// массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);
// // Change code below this line


// TASK 8(Last item index)
// Объяви две перемнные:
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);


// TASK9(Edge elements of the array)
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив
// элементов произвольной длины.Функция должна возвращать массив из двух
// элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Change code below this line
//     const lastElementIndex = array.length - 1;
//     const firstElement = array[0];
//     const lastElement = array[lastElementIndex];
//     return [firstElement, lastElement];

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// Change code below this line


// TASK10(The split () string method)
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в
// переменной words результат разделения строки message по разделителю delimeter - массив
// строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""))
// console.log(splitMessage("best_for_week", "_"))


// TASK 11 (jewelry engraving)
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену
// гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает
// строку, состоящую из слов разделённых только пробелами(параметр message) и цену
// гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в
// строке.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let price;
//     price = message.split(' ').length * pricePerWord;
//     // price = message.length * pricePerWord;


//    // Change code above this line
//     return price;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// TASK 12( join() array method )
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в
// переменной string результат соединения элементов массива array c разделителем
// delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line

//     string = array.join(delimeter);

//     // Change code above this line
//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
//     // if (maxLength < message.length) {

//         return message.slice(0, maxLength)  + '...';
//     }

//     return message;
// }


// function formatMessage(message, maxLength) {
//     return maxLength < message.length ? message.slice(0, maxLength) + '...' : message;
// }


// console.log(formatMessage("Curabitur ligula sapien", 16)); //возвращает 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //возвращает 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //возвращает 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.
// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Math.pow()
// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// TASK 3
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]
// Результат который должны получить [2, 4, 4, 2, 3]

// Number.isInteger(arr[i])

// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
// }

// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a feОт GoIT Academy 8 всем:  07:32 PM
// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// const findBestEmployee = function(obj) {}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// const findBestEmployee = (obj) => Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
// Task 1
// Добавить метод getInfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }


// const max = 15;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }


// let clientCounter = 18;
// const maxClients = 25;


// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
//


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let largeCoin = numbers[0];

// for (const number of numbers) {
//     if (number > largeCoin) {
//         largeCoin = number;
//  } 
// }

// console.log('largeCoin', largeCoin);

// TASK 13(slug generator) from 1:50:00 (Lesson 3 Repeta)
// Напиши функцию slugify(title) которая принимает заголовок статьи,
//     параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только
// пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line
//     //(first option) const slug = title.toLowerCase().split(' ').join('-');
//     // (second option)const normalizedString = title.toLowerCase();

//     // const words = normalizedString.split(' ');

//     // const slug = words.join('-');
    
    
//     //     return slug;
//     // }
//   // Change code above this line
    


// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// TASK (slice() method)
// Дополни код так, чтобы переменные содержали частичные копии исходного
// массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = ;
// const nonExtremeEls = ;
// const lastThreeEls = ;

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1,4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// TASK FROM REPETA
// напиши скрипт, который считает сумму элементов двух массивов 

const array1 = [20, 30, 10, 12];
const array2 = [10, 15, 30];

let total = 0;
// for (let i = 0; i < array1.length; i += 1){
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1){
//     total += array2[i];
// }


// console.log(total)
// const numbers = array1.concat(array2);
// // console.log(numbers);
// for (const number of numbers) {
//     total += number;
// }



for (const number of array1.concat(array2)) {
    total += number;
}

console.log(total);
 
