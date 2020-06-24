function createComputerHierarchy() {
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Keyboard {

        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor  {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            //Проверява за абстрактен компютър
            if (this.constructor.name === Computer.name) {
                throw new Error("Cannot instantiate abstract class")
            }

            this.manufacturer = manufacturer
            this.processorSpeed = processorSpeed
            this.ram = ram
            this.hardDiskSpace = hardDiskSpace
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            this.weight = weight
            this.color = color
            this._battery = null;
            this.battery = battery
        }

        get battery() {
            return this._battery
        }

        set battery(value) {
            if (value instanceof Battery == false) {
                throw new TypeError('Laptop batter must be an instance of Battery')
            }

            this._battery = value
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            this._keyboard = null
            this._monitor = null
            this.keyboard = keyboard
            this.monitor = monitor
        }

        get keyboard() {
            return this._keyboard
        }

        set keyboard(value) {
            if (value instanceof Keyboard == false) {
                throw new TypeError('Computer keyboard must be an instance of Keyboard')
            }
            this._keyboard = value
        }

        get monitor() {
            return this._monitor
        }

        set monitor(value) {
            if (value instanceof Monitor == false) {
                throw new TypeError('Computer monitor must be an instance of Monitor')
            }
            this._monitor = value
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let comp = createComputerHierarchy();
const battery = new comp.Battery('Samsung', 3)
let a = new comp.Laptop('HP', 2.4, 4, 5, 3, 'green', battery)

console.log(a)