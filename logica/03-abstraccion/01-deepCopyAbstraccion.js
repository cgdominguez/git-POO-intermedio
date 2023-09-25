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

const studentBase= {
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
Object.isFrozen(juan)// 
