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

console.log(juan);// se llega a percibir una tonalidad distinta en cuanto a color en las propiedaades que tienen un parametro distinto en sus valores true o flase


Object.defineProperty(juan,"navigator",{
    value:"Chrome",
    enumerable:false,
    writable:true,
    configurable:true,
});
// Object.keys(juan);   (NO fifura enumerable. La propiedad enumerable:false , no nos permite listar) 
//Object.getPropertyNames(juan);   (con este metodo statico permite ver)
// juan.navigator= Firefox; (nos permite editar la propiedad)
// delete juan.navigator; (se puede eliminar)

Object.defineProperty(juan,"editor",{
    value:"vsCode",
    enumerable:true,
    writable:false,
    configurable:true,
});
//Object.keys(juan);        (figura en la consola , enumerable es true.)
//Object.getPropertyNames(juan);   (con este metodo statico permite ver.)
//juan.editor= "atom"; (NO nos permite editar la propiedad)
//delete juan.editor;  (permite borrar)


Object.defineProperty(juan,"terminal",{
    value:"WSL",
    enumerable:true,
    writable:true,
    configurable:false,
});
//Object.keys(juan);            (figura en la consola , enumerable es true.)
//Object.getPropertyNames(juan);(con este metodo statico permite ver.)
//juan.terminal= "cmder";       (nos permite editar la propiedad)
//delete juan.terminal;         (NO permite borrar)




Object.defineProperty(juan,"pruebaNasa",{
    value:"extraterrestre",
    enumerable:false,
    writable:false,
    configurable:false,
});
//Object.keys(juan);            (NO figura en la consola , enumerable es false.)
//Object.getPropertyNames(juan);(con este metodo statico nos permite ver.)
//juan.pruebaNasa= "OVNIS";     (NO nos permite editar la propiedad)
//delete juan.terminal;         (NO permite borrar)


console.log(Object.getOwnPropertyDescriptors(juan));
