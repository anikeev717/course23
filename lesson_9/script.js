// const userName = prompt("Enter Your Name");
// console.log(userName.length);
// if (userName && userName.length >= 3) {
//   alert("Hello, " + userName + "!");
// } else {
//   alert("Invalid username");
// }
// let i = 0; // счетчик
//
// let userName;
// for (; userName === "" || userName === undefined; ) {
//   userName = prompt("Enter Your Name");
// }
// alert("Hello, " + userName + "!");
//
// let userName;
// while (userName === "" || userName === undefined) {
//   userName = prompt("Enter Your Name");
// }
// alert("Hello, " + userName + "!");
// const numbers = [0, 1, 2, 3, 4, 5];//массив чисел
// const vegetables = ["tomatoes", "potatoes"];//массив строк

// const numbers = [];
// for (let number; number || number === undefined; ) {
//   number = prompt("Enter number!");
//   if (number === null || number === "" || isNaN(number)) {
//     continue;
//   }
//   numbers.push(Number(number));
// }
// console.log(numbers);

// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
//   console.log(total);
// }
// alert(total / numbers.length);

const array = [];
for (let symbol; symbol || symbol === undefined; ) {
  symbol = prompt("Enter a number!");
  if (symbol === null || symbol === "" || isNaN(symbol)) {
    continue;
  }
  array.push(Number(symbol));
}
console.log(array);
