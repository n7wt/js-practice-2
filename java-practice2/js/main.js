// 1. Создать константу с любым числовым значением. Если значение константы меньше 10,
// то вывести в консоль текст “константа меньше 10”, иначе вывести “константа не меньше 10”
const konstanta = prompt("Введите любое значение константы: ");

if (konstanta < 10) {
  console.log(`Константа ${konstanta} меньше 10`);
} else {
  console.log(`Константа ${konstanta} больше 10`);
}
/////////////////////////

// 2. Повторить все примеры, которые мы сделали на урок.
let a = 20;
let b = 15;

if (a > b) {
  console.log("Переменная (a) больше чем (b).");
} else if (a === b) {
  console.log("Переменная (а) меньше чем (b).");
} else {
  console.log("Ошибка!");
}
//////////////////////////
let dataLogin = "Amirkhan";
let dataPassword = "leto2013";

let login = prompt("Введите свой логин: ");
let password = prompt("Введите свой пароль: ");

if (dataLogin === login && dataPassword === password) {
  console.log("Вы успешно вошли в аккаунт!");
} else {
  console.log("Неправильный логин или пароль. Попробуйте заново.");
}
///////////////////////////
let code = "java";

switch (code) {
  case "html":
    console.log("html");
    break;

  case "css":
    console.log("css");
    break;

  case "js":
    console.log("js");
    break;

  case "react":
    console.log("react");
    break;

  case "vue.js":
    console.log("vue.js");
    break;

  default:
    console.log("Ошибка!");
}
////////////////////////////

// 3. Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их
// и если x больше, чем y, то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
let x = 10,
  y = 7;

let result =
  x > y ? `${x} (х) больше чем ${y} (y) ` : `${x} (х) меньше чем ${y} (y) `;
console.log(result);
////////////////////////////

// 4. Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».
// Если посетитель вводит четное число, то выводить «Число ${ num} четное», если нечетное: Число ${num} нечетное.
let num = prompt("Введите любое число: ");
if (num % 2 == 0) {
  console.log(`Число ${num} является четным.`);
} else {
  console.log(`Число ${num} является нечетным.`);
}
///////////////////////////////

//5. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
// Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код,
// который должен определять, какое из введенных чисел является наибольшим.
let first = prompt("Введите первое число: ");
let second = prompt("Введите второе число: ");
let third = prompt("Введите третье число: ");

if (first > second && first > third) {
  console.log(`Первое число - ${first} - является наибольшим числом.`);
} else if (second > first && second > third) {
  console.log(`Второе число - ${second} - является наибольшим числом.`);
} else if (third > first && third > second) {
  console.log(`Третье число - ${third} - является наибольшим числом.`);
}
