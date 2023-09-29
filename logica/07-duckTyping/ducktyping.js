function createLearningPath({
    name = requiredParam("name"),// parametro obligatorio
    curses=[],

     
}) {
   const private={
    "_name": name,
    "_curses":curses,
   };
   
   const public ={

    get curses(){
        return private["_curses"];// se accede desde el getter name 
    },
   };

   return public
}







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
        "_learningPath": learningPaths,
    };

    const public= {
        age,//PROPIEDADES 
        email,
        aprovedCourses,
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

        get learningPaths(){ 

            return private["_learninPaths"];
        },
        set learningPaths(newLP){
            if (!newLP.name){
                console.warn("tu lp no tiene propiedad name");
                return;
            }

            if(!newLP.curses){
                console.warn("tu lp no tiene cursos");
                return;
            }

            if(!isArray(newLP.curses)){
                console.warn("tu lp no es una lista de cursos");
                return;
            }

            private["_learningPath"] = newLP;

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