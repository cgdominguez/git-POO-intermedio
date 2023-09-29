function createStudent({ 
    name,
    email,
    age,
    twitter,
    instagram,
    facebook,
    aprovedCourses=[],
    learningPaths= [],
}= {} ){

    const private={
        "_name": name,
        };// _ el guin bajoes una convencion, una forma de entender a nivel global que es una variable privado / propiedad privada 

    const public= {
        age,//PROPIEDADES 
        email,
        aprovedCourses,
        learningPaths,
        socialMedia:{
            twitter,
            instagram,
            facebook,
            },
        get name(){ //cuando de llame a juan.name se ejecuata esta funcion
            return private["_name"];
        },
        set name(newName){
            if(newName.length != 0){
                private["_name"] =newName;
            }else{
                console.warn("TU NOMBRE DEBE TENER ALMENOS UN CARACTER")
            }
            //return private["_name"]
        },
     };//
        return public;
         
    };

const juan = createStudent({
    name: "juancito",
    age: 18,
    email: "juanito@gmail.com",
    twitter: "djuanDC",

});

//en consola 
/*
Object.defineProperty(juan,"name",{
    value:"roberto";

}) esto se lee= ediatamos una propiedad de "juan",la propiedad "name", con losiguientes valores {}. 
*/