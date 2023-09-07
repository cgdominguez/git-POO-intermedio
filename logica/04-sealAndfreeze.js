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



//Object.seal(juan); //no se pueden borrar 
Object.freeze(juan)  // todas las propiedades no se pueden borrar ni editar


console.log(Object.getOwnPropertyDescriptors(juan));