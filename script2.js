
// ==========================================
// ЗАДАНИЕ 11. ОПРЕДЕЛЕНИЕ ТЕМПЕРАТУРЫ
// ==========================================

let temperature = 18;

if (temperature < 0) {
    console.log("Задание 11: Очень холодно");
} else if (temperature <= 15) {
    console.log("Задание 11: Прохладно");
} else if (temperature <= 25) {
    console.log("Задание 11: Тепло");
} else {
    console.log("Задание 11: Жарко");
}


// ==========================================
// ЗАДАНИЕ 12. ПРОВЕРКА ЛОГИНА
// ==========================================

let login = "student";

if (login === "admin") {
    console.log("Задание 12: Добро пожаловать!");
} else {
    console.log("Задание 12: Неверный логин");
}


// ==========================================
// ЗАДАНИЕ 13. МАКСИМАЛЬНОЕ ЧИСЛО
// ==========================================

let a = 12;
let b = 25;
let c = 18;

let max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log("Задание 13: Максимальное число =", max);


// ==========================================
// ЗАДАНИЕ 14. СТОИМОСТЬ БИЛЕТА
// ==========================================

let age = 20;

if (age < 7) {
    console.log("Задание 14: Бесплатно");
} else if (age <= 17) {
    console.log("Задание 14: 500 ₸");
} else if (age <= 59) {
    console.log("Задание 14: 1000 ₸");
} else {
    console.log("Задание 14: 600 ₸");
}


// ==========================================
// ЗАДАНИЕ 15. ДЕНЬ НЕДЕЛИ
// ==========================================

let day = 3;

switch (day) {
    case 1:
        console.log("Задание 15: Понедельник");
        break;

    case 2:
        console.log("Задание 15: Вторник");
        break;

    case 3:
        console.log("Задание 15: Среда");
        break;

    case 4:
        console.log("Задание 15: Четверг");
        break;

    case 5:
        console.log("Задание 15: Пятница");
        break;

    case 6:
        console.log("Задание 15: Суббота");
        break;

    case 7:
        console.log("Задание 15: Воскресенье");
        break;

    default:
        console.log("Задание 15: Неверный номер дня");
}


// ==========================================
// ЗАДАНИЕ 16. СУММА ОТ 1 ДО 100
// ==========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Задание 16: Сумма =", sum);


// ==========================================
// ЗАДАНИЕ 17. ЧЁТНЫЕ ЧИСЛА
// ==========================================

let evenCount = 0;

console.log("Задание 17: Чётные числа:");

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
        evenCount++;
    }
}

console.log("Количество чётных чисел =", evenCount);


// ==========================================
// ЗАДАНИЕ 18. СРЕДНИЙ БАЛЛ
// ==========================================

let grades = [85, 90, 78, 92, 88];

let gradesSum = 0;

for (let i = 0; i < grades.length; i++) {
    gradesSum = gradesSum + grades[i];
}

let average = gradesSum / grades.length;

console.log("Задание 18: Средний балл =", average);

if (average > 80) {
    console.log("Средний балл превышает 80");
} else {
    console.log("Средний балл не превышает 80");
}


// ==========================================
// ЗАДАНИЕ 19. САМЫЙ ДОРОГОЙ ТОВАР
// ==========================================

let prices = [1500, 3500, 2200, 7000, 4100];

let maxPrice = prices[0];

for (let i = 1; i < prices.length; i++) {
    if (prices[i] > maxPrice) {
        maxPrice = prices[i];
    }
}

console.log("Задание 19: Самая высокая цена =", maxPrice, "₸");


// ==========================================
// ЗАДАНИЕ 20. ОБРАТНЫЙ ОТСЧЁТ
// ==========================================

console.log("Задание 20:");

let countdown = 10;

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

console.log("Старт!");


// ==========================================
// ЗАДАНИЕ 21. ЭЛЕКТРОННАЯ ОЧЕРЕДЬ
// ==========================================

let queue = [101, 102, 103, 104, 105];

console.log("Задание 21:");

for (let i = 0; i < queue.length; i++) {
    console.log("Приглашается студент №" + queue[i]);
}

console.log("Очередь завершена");


// ==========================================
// ЗАДАНИЕ 22. ПРОВЕРКА ДОСТУПА
// ==========================================

let role = "student";
let hasPass = true;

console.log("Задание 22:");

if (role === "teacher") {
    console.log("Доступ разрешён");
} else if (role === "student" && hasPass) {
    console.log("Доступ разрешён");
} else if (role === "student" && !hasPass) {
    console.log("Доступ запрещён");
} else {
    console.log("Обратитесь к администратору");
}


// ==========================================
// ЗАДАНИЕ 23. ЗАРАБОТНАЯ ПЛАТА
// ==========================================

let salary = 200000;

let bonusPercent;

if (salary < 150000) {
    bonusPercent = 20;
} else if (salary < 300000) {
    bonusPercent = 15;
} else {
    bonusPercent = 10;
}

let bonus = salary * bonusPercent / 100;
let totalSalary = salary + bonus;

console.log("Задание 23:");
console.log("Базовая зарплата:", salary, "₸");
console.log("Премия:", bonus, "₸");
console.log("Общая зарплата:", totalSalary, "₸");


// ==========================================
// ЗАДАНИЕ 24. ПОСЕЩАЕМОСТЬ
// ==========================================

let attendance = [
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    true
];

let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {

    if (attendance[i] === true) {
        present++;
    } else {
        absent++;
    }

}

let attendancePercent =
    (present / attendance.length) * 100;

console.log("Задание 24:");
console.log("Присутствуют:", present);
console.log("Отсутствуют:", absent);
console.log("Процент посещаемости:", attendancePercent + "%");


// ==========================================
// ЗАДАНИЕ 25. МИНИ-БАНКОМАТ
// ==========================================

let balance = 100000;
let pin = 1234;
let enteredPin = 1234;
let amount = 25000;

console.log("Задание 25:");

if (enteredPin !== pin) {

    console.log("Ошибка: неправильный PIN-код");

} else if (amount <= 0) {

    console.log("Ошибка: сумма должна быть больше нуля");

} else if (amount > balance) {

    console.log("Ошибка: недостаточно средств");

} else {

    balance = balance - amount;

    console.log("Операция выполнена успешно");
    console.log("Снято:", amount, "₸");
    console.log("Новый баланс:", balance, "₸");
}


// ==========================================
// ЗАДАНИЕ 26. ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР
// ==========================================

let number1 = Number(prompt("Введите первое число:"));
let number2 = Number(prompt("Введите второе число:"));

let operation = prompt(
    "Выберите операцию: +, -, *, /"
);

switch (operation) {

    case "+":
        alert("Результат: " + (number1 + number2));
        break;

    case "-":
        alert("Результат: " + (number1 - number2));
        break;

    case "*":
        alert("Результат: " + (number1 * number2));
        break;

    case "/":

        if (number2 === 0) {
            alert("Ошибка: на ноль делить нельзя!");
        } else {
            alert("Результат: " + (number1 / number2));
        }

        break;

    default:
        alert("Ошибка: неизвестная операция");
}
