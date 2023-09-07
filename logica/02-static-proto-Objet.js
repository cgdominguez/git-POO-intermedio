const juan={
    name: "juanito",
    age:18,
    aprovedCourse:["Curso 1"],
        addCourse(newCourse){
            console.log("esto",this);
            console.log("esto.aprovedCouses", this.aprovedCourse);
            this.aprovedCourse.push(newCourse);
        }
};

console.log(Object.keys(juan));
/*
Array(4)
0:"name"
1:"age"
2:"aprovedCurso" 
3:"addCurse"
length: 4
[[Prototype]]: Array(0)

*/

console.log(Object.getOwnPropertyNames(juan));
/*
Array(4)
0:"name"
1:"age"
2:"aprovedCurso" 
3:"addCurse"
length: 4
[[Prototype]]: Array(0)

*/

console.log(Object.entries(juan));// array de arrays .. en el metodo entries del prototypo Object ,juan deja de ser el objeto sino q pas a ser el array a this a la hora de referise al EL ,

/*Array(4)
0:(2) ['name', 'juanito']
1:(2) ['age', 18]
2:(2) ['aprovedCurso', Array(1)]
3:(2) ['addCurse', ƒ]
length:4
[[Prototype]]:Array(0)
*/

// 


console.log(Object.getOwnPropertyDescriptors(juan));// getOwnPropertyDescriptors nos debuelve un objeto con cada una de las propiedad del objeto juan, con nuevas propiedades cpmp, configurable , enumerable, writable  

// 

Object.defineProperty(juan, "pruevaNASA" ,{
    value:"extraterrestre",


});      //sireve para crear nuevas propiedada en las que se le puede editrar las nuevas propiedades que nos da getOwnPropertyDescriptors
// recive tres argumento /parametros ( nombre del objeto, el nombre del nuevo atributo /propiedad, {lista de atributos} 






