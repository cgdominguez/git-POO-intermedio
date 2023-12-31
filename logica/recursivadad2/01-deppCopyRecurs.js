const obj1 = {// objeto a copiar
    a: "a",
    b: "b",
    c: {
       d: "d",
       e: "e", 
    },
    editA() {
        this.a = "AAAAA";
    }
}; 

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
}
