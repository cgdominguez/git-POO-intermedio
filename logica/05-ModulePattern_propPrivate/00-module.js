function isObject(subject) {
    return typeof subject == "object" ;
}

function isArray(params) {
        return Array.isArraya(subject);
}




function deepCopy(subject) { // recibe un elemento string , array , objeto, numero

    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
    
    if(subjectIsArray){
            copySubject = [];
        }else if (subjectIsObject){
            copySubject = {};
            }else{
                return subject;
            }

    for (key in subject ){
        const keyIsObject = isObject (subject[key])
       
        if (keyIsObject){
            copySubject[key] = deepCopy(subject[key]) 
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key]= subject[key];
            }
        }
    }
    return copySubject;    
};

/* const studentBase= {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCurses: undefined,
    learningPaths:undefined,
    socialMedia:{
        twitter:undefined,
        instagram: undefined,
        facebook:undefined,

    },
};

const juan = deepCopy(studentBase); // copia todas las propiedades del objeto studentBaseo
Object.seal(juan);
Object.isSealed(juan);// el objeto juan tiene todas la propiedades estan protegidas
Object.isFrozen(juan)//  */

//RORO RECIBE OBJETO RETORNA OBJETO

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
        age,
        email,
        aprovedCourses,
        learningPaths,
        socialMedia:{
            twitter,
            instagram,
            facebook,
            },
        changeName(newName){
            // Se puede iniciar un condicional para realizar un filtro para detectar palabras obsenas , o caracteristicas q no queremos 
            private["_name"] = newName;// llamado a la propiedada _name 
            },
        readName(){
            return private["_name"];
        },
     };//

        /*return{
            
            changeName(newName){
                // Se puede iniciar un condicional para realizar un filtro para detectar palabras obsenas , o caracteristicas q no queremos 
                this.name = newName;
            },
            

        };*/
        Object.defineProperty(public,"readName",{ // protegemos propiedad readname
            configurable:false,
            writable:false,
        })
        
        Object.defineProperty(public,"readName",{
            configurable:false,
            writable:false,
        })

        return public;
         
    };

const juan = createStudent({
    name: "juancito",
    age: 18,
    email: "juanito@gmail.com",
    twitter: "djuanDC",

});