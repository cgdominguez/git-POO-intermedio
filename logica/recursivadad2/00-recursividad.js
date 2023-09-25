


const numeros=[44,2,3,4,5,6,77,778,88,99,41];
//let numero=0;
//for (let index= 0; index < numeros.length; index++){
//    numero= numeros[index];
//    console.log({index, numero});// de esta manera pedimos que nos de un objeto de cada uno de los siclos ejecutados dadonos un orden con su respectivo valor
//
//}

function recursiva(numbersArray) {
    if(numbersArray != 0){
        const firstNum= numbersArray[0]// el primer elemeto se consigue acá
        console.log(firstNum);
        numbersArray.shift(); //elimina el primer elemento
        recursiva(numbersArray);
    }    
}