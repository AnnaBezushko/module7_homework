// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.


class Electrodevice {
    constructor(name, onOff) {
        this.name = name;
        this.material = "металл";
        this.onOff = onOff;
    }
    getPower(power) {
        if (this.onOff === "on") { console.log(`Прибор "${this.name}" включён. Потребляемая мощность = ${power} КВт`); }
        else { console.log(`Прибор "${this.name}" выключен.`); }
    }
};


class SmartElectrodevice extends Electrodevice {
    constructor(name, onOff, smarthome) {
        super (name, onOff);
        this.name = name;
        this.material = "металл";
        this.onOff = onOff;
        this.smarthome = smarthome;
    }
};


class EntertainmentElectrodevice extends Electrodevice {
    constructor(name, onOff, screen) {
        super (name, onOff);
        this.name = name;
        this.material = "пластик";
        this.onOff = onOff;
        this.screen = screen;
    }
    getPower(power) {
        if (this.onOff === "on") { console.log(`Прибор "${this.name}" включён. Потребляемая мощность при 100% яркости экрана = ${power} КВт`); }
    }
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