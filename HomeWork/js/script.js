// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// let student = {
//     name: "Ivan",
//     spec: "developer",
//     aver: 4,
//     miss: 7,
//     showInfo: function () {
//         console.log(
//           "Name: " + this.name + " Speciality: " + this.spec + " Average mark: " + this.aver + " Missed lessons: " + this.miss
//         );
//       },
// }

// student.showInfo();

// st1 = {
//     name: "Max",
//     spec: "mechanic",
//     aver: 4,
//     miss: 155,
// }

// st2 = {
//     name: "Alyona",
//     spec: "developer",
//     aver: 5,
//     miss: 12,
// }

// st3 = {
//     name: "Polina",
//     spec: "economist",
//     aver: 5,
//     miss: 10,
// }

// student.showInfo.bind(st1)();
// student.showInfo.call(st2);
// student.showInfo.apply(st3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const info = {
//     showInfo() {
//       console.log(this.def);
//     },
//   };
  
//   const html = {
//     def: "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
//   };
  
//   const css = {
//     def: "CSS — спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
//   };

//   document
//   .querySelector("#html")
//   .addEventListener("click", info.showInfo.bind(html));

// document
//   .querySelector("#css")
//   .addEventListener("click", info.showInfo.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// let store = {
//         calculatePrice: function (name, price, kg) {
//             console.log(name + " " + (price * kg));
//         }
// }

// store.calculatePrice("banana", 30, 4.5);
// store.calculatePrice("cherry", 58, 1.3);
// store.calculatePrice("orange", 89, 3.4);

