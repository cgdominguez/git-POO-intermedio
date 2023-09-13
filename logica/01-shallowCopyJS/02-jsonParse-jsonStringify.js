const obj1= {
    a:"a",
    b:"b",
    c:{         // al tener un objeto dentro de otro, el cambio afecta a ambas partes , no sucede si no esxite unn  objeto dentro de otro 
        d:"d",
        e:"e",
    }
  };
  
const stringifyComplexObj = JSON.stringify(obj1);// nos crea un string del objeto obj1

const  obj2 = JSON.parse(stringifyComplexObj);  // creamos un objeto desde un string , en este caso desde  le stringifyCpmplexObj

// con estos metodo estaticos de prototipos Object no funcionan con metodos , por ende no son heredirtarios/ copias







