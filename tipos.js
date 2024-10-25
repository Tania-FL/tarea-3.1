// Ejercicio 1:
// Desarrollar una función que verifique si un número es válido.

function isValidNumber(num) {

  return typeof num === 'number' && isFinite(num);
}

console.log(isValidNumber(15));       // true
console.log(isValidNumber(NaN));     // false
console.log(isValidNumber("5"));     // false

// Ejercicio 2:
// Desarrollar una función que realice una operación matemática y maneje casos especiales de NaN e Infinity.

function safeAddition(a, b) {

  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 0;
  }
  return a + b;
}
console.log(safeAddition(5, 10));         // 15
console.log(safeAddition(5, NaN));        // 0
console.log(safeAddition(5, Infinity));   // 0

// Ejercicio 3:
// Desarrollar una función que realice una división y maneje el caso especial de división por cero.

function safeDivision(a, b) {

  if (b === 0) {
    return Infinity;
  }
  if (!isValidNumber(a) || !isValidNumber(b)) {
    return 0;
  }
  return a / b;
}
console.log(safeDivision(10, 2));     // 5
console.log(safeDivision(10, 0));     // Infinity
console.log(safeDivision(10, NaN));   // 0
console.log(safeDivision(10, Infinity)); // 0

// Ejercicio 4:
// Investigar y aplicar diferentes métodos y propiedades asociados a los tipos de datos en JavaScript.
// Métodos de cadena de texto:

// 1.	charAt(): Devuelve el carácter en una posición específica de la cadena.

let text = "Gatitos!";
let char = text.charAt(1);
console.log(char); // Salida: "a"


	// 2.	split(): Divide una cadena en un array de subcadenas según un separador específico.

let sentence = "Me gustan los gatos";
let words = sentence.split(" ");
console.log(words); // Salida: ["Me,", "gustan", "los", "gatos"]


	// 3.	indexOf(): Devuelve el índice de la primera aparición de un carácter o subcadena en una cadena. Si no se encuentra, devuelve -1.

let text = "Tortugas Ninja";
let index = text.indexOf("Ninja");
console.log(index); // Salida: 9



// Métodos de Arrays

	// 1.	push(): Agrega uno o más elementos al final de un array.

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Salida: [1, 2, 3, 4, 5]


	// 2.	pop(): Elimina el último elemento de un array y lo devuelve.

let fruits = ["apple", "banana", "mango"];
let lastFruit = fruits.pop();
console.log(fruits); // Salida: ["apple", "banana"]


	// 3.	join(): Une todos los elementos de un array en una cadena, separados por un delimitador especificado.

let words = ["Me", "gusta", "patinar"];
let sentence = words.join(" ");
console.log(sentence); // Salida: "Me gusta patinar"



// Métodos de Objetos

// 	1.	hasOwnProperty(): Verifica si una propiedad específica existe en el objeto.

let person = { name: "Tania", age: 25 };
let hasName = person.hasOwnProperty("name");
console.log(hasName); // Salida: true


	// 2.	keys(): Devuelve un array de las claves (nombres de propiedades) del objeto.

let person = { name: "Ana", age: 25 };
let keys = Object.keys(person);
console.log(keys); // Salida: ["name", "age"]


	// 3.	values(): Devuelve un array de los valores de las propiedades del objeto.

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
let values = Object.values(car);
console.log(values); // Salida: ["Toyota", "Corolla", 2020]

// Ejercicio 5. Realizar operaciones aritméticas utilizando números y cadenas de texto

let num1 = 25;
let str1 = "10"; 

let sum = num1 + Number(str1); 
console.log(sum); // Salida: 35

let concatenated = num1 + str1;
console.log(concatenated); // Salida: "2510"


// Ejercicio 6: Se te proporciona un array y realizar operaciones como: agregar elementos al array, 
// modificar valores de propiedades en el objeto, y luego imprimir los resultados.

// Array 
let people = [
  { name: "Tania", age: 25 },
  { name: "Ana", age: 27 }
];

// 1. Agregar un nuevo objeto al array
people.push({ name: "Noe", age: 30 });
console.log("Después de agregar a Noe:", people);

// 2. Modificar el valor de una propiedad de un objeto existente
people[0].age = 26; // Cambiar la edad de Tania a 26
console.log("Después de modificar la edad de Tania:", people);

// 3. Imprimir los resultados en un bucle
console.log("Lista final de personas:");
people.forEach((person, index) => {
  console.log(Persona ${index + 1}: ${person.name}, Edad: ${person.age});
});