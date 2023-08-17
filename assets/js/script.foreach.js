// const companies = ["Apple", "Google", "Facebook"];

// companies.forEach((company) => {
//   console.log(`Hi, ${company}!`);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// numbers.forEach((number, index) => {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
// });

// const cars = [
//   {
//     marca: "Ford",
//     modelo: "Focus",
//   },
//   {
//     marca: "BMW",
//     modelo: "BMW Z4",
//   },
//   {
//     marca: "Fiat",
//     modelo: "Palio",
//   },
//   {
//     marca: "Audi",
//     modelo: "A3",
//   },
// ];

// cars.forEach((car) => {
//   console.log(`Marca: ${car.marca} -
//     Modelo: ${car.modelo}`);
// });

// class Car {
//   constructor(param1, param2) {
//     this.marca = param1;
//     this.modelo = param2;
//   }
// }

// class CarsList {
//   constructor() {
//     this.cars = [];
//   }

//   addCar(param) {
//     this.cars.push(param);
//   }
// }

// const carsList = new CarsList();

// function createCar() {
//   const marca = document.getElementById("marcaInput").value;
//   const modelo = document.getElementById("modeloInput").value;

//   const car = new Car(marca, modelo);

//   carsList.addCar(car);

//   document.getElementById("marcaInput").value = "";
//   document.getElementById("modeloInput").value = "";

//   carsList.cars.forEach((car) => {
//     console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
//   });
// }

class Category {
  constructor(name) {
    this.name = name;
  }
}
