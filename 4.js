// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте потребляемую мощность (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// 1.Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// 2.Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// 4.Создайте экземпляры каждого прибора.
// 5.Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function Electrodevice (name, onOff) {
    this.name = name;
    this.material = "металл"
    this.onOff = onOff
};

Electrodevice.prototype.getPower = function (power) {
    if (this.onOff === "on") {console.log (`Прибор "${this.name}" включён. Потребляемая мощность = ${power} КВт`)}
    else {console.log (`Прибор "${this.name}" выключен.`)}
};

function SmartElectrodevice (name, onOff, smarthome) {
    this.name = name;
    this.material = "металл"
    this.onOff = onOff
    this.smarthome = smarthome
};

SmartElectrodevice.prototype = new Electrodevice;

function EntertainmentElectrodevice (name, onOff, screen) {
    this.name = name;
    this.material = "пластик"
    this.onOff = onOff
    this.screen = screen
};

EntertainmentElectrodevice.prototype = new Electrodevice;

EntertainmentElectrodevice.prototype.getPower = function (power) {
    if (this.onOff === "on") {console.log (`Прибор "${this.name}" включён. Потребляемая мощность при 100% яркости экрана = ${power} КВт`)}
};

const teaPot = new Electrodevice ("чайник", "on");
const lamp = new SmartElectrodevice ("умная лампа", "off", "Яндекс");
const tv = new EntertainmentElectrodevice ("телевизор", "on", "OLED" )
teaPot.getPower(2);
lamp.getPower(0.012);
tv.getPower (0.15)
console.log (teaPot)
console.log (lamp)
console.log (tv)
