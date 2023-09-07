//
class Patito { // las clsases siempre llevan la primer letra del nombre en mayuscula 
	static sonidito = "cuak!";

	static hacerSonidito() {
		return "cuak! x2";
	}
}

// Por fuera de clase Patito, podemos acceder a lo siguiente sin crear alguna instancia:
// Al atributo `sonidito`
console.log(Patito.sonidito)

// Al método `hacerSonidito`
console.log(Patito.hacerSonidito());

//
const objetito = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
}

console.log(
	Object.keys(objetito)  // metodo statico keys del prototipo Object
); // [ 'name', 'email', 'age' ]

// metodo estatico static getOwnPropertyName 
const objetitos = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
}

console.log(
	Object.getOwnPropertyNames(objetitos)
); // [ 'name', 'email', 'age' ]

// metodo estatico static entries
const objetite = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
}

console.log(
	Object.entries(objetite)
);

/* > Impresión en consola: nos devuleve un array de arrrays
[
  [ 'name', 'Juanito' ],
  [ 'email', 'juanito@frijolitos.io' ],
  [ 'age', 18 ]
]
*/

//metodo estatico static getOwnPropertyDescriptors

const objeto = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
}

console.log(
	Object.getOwnPropertyDescriptors(objeto)                                     
);
/* en consola : getOwnPropertyDescriptor nos devuelve todas las propiedades del objeto con nuvas keys y values , esta es la forma que tiene js para limitar , la modificacion y acceso de los objetos . 
{
  name: {
    value: 'Juanito',
    writable: true,
    enumerable: true,
    configurable: true
  },
  email: {
    value: 'juanito@frijolitos.io',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 18, writable: true, enumerable: true, configurable: true }
} */













