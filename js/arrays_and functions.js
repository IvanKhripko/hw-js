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