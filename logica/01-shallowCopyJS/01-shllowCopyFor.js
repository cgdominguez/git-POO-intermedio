const obj1= {
    a:"a",
    b:"b",
    c:{         // al tener un objeto dentro de otro, el cambio afecta a ambas partes , no sucede si no esxite unn  objeto dentro de otro 
        d:"d",
        e:"e",
    }
  };
  
  const obj2 = {};
    for (propiedad in obj1){
      obj2[prop] = obj1[prop] 
    };

    const obj3 = Object.assign({},obj1);s //metodo estatico del prototipo Object
// el prototipo assing se lee Object.assing({un objeto vasio},al cual le voy a asignar las propiedades del objeto copia)

const obj4 = Object.create(obj1); // ahroa obj4 posee las propiedades de obj1 , en obj4 podemos  asignarle valores nuevos o cambiar las propiedades y agregar que estas no van a afectar a las propieddades del objeto copiado , en este caso es el obj1

// los objetos originales si afectan a sus copias , ya q este es una copia fiel en sencillas palabras, continuamente se estan copiando del objeto original

