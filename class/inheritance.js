// Parent class
class Laptop {
  constructor(ram, processor, generation) {
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;
  }
}

// Child Class
class Dell extends Laptop {
  constructor(ram, processor, generation, modelName, price) {
    super(ram, processor, generation);
    this.modelName = modelName;
    this.price = price;
  }
  displayMessage() {
    console.log(
      `Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} - ${this.generation} gen - ModelName ${this.modelName} - Price Rs. ${this.price}`
    );
  }
}

const dell1 = new Dell("8GB", "Intel", "i5", "Latitude", 45000);
console.log(dell1);
dell1.displayMessage();
