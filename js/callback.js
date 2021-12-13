// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

//-----------------------------------------------------------------------
// Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   }
//
//   // Функция высшего порядка
//   function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
//
//   registerGuest("Манго", greet);


// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
  
//   // Передаём инлайн функцию greet как колбэк
//   registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   });
  
//   // Передаём инлайн функцию notify как колбэк
//   registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
//   });


// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//       // Логика активации автоответчика
//     } else {
//       console.log(`Соединяем с ${recipient}, ожидайте...`);
//       // Логика принятия звонка
//     }
//   }
  
//   processCall("Манго");


// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Поли", takeCall, leaveHoloMessage);


// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1) {
//       console.log(i);
//     }
//   };
  
//   repeatLog(5);


// function printValue(value) {
//     console.log(value);
//   }
  
//   function prettyPrint(value) {
//     console.log("Logging value: ", value);
//   }
  
//   function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   }

  
//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2
  
//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2