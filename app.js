class Vehicle {
	constructor(a, b, c) {
		this.make = a;
		this.model = b;
		this.year = c;
	}
	honk() {
		return "Beep.";
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
	}
}

class Car extends Vehicle {
	constructor(a, b, c) {
		super(a, b, c);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(a, b, c) {
		super(a, b, c);
		this.numWheels = 2;
	}
	revEngine() {
		return "VROOM!!!";
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	addVehicle(vehicle) {
		if (vehicle instanceof Vehicle) {
			if (this.vehicles.length < this.capacity) {
				this.vehicles.push(vehicle);
				return "Vehicle added";
			} else {
				return "Sorry, we're full.";
			}
		} else {
			return "Only Vehicles allowed in here!";
		}
	}
}
