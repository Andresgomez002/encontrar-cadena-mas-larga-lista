// Encontrar la cadena más larga: Dada una lista de cadenas, crea una función en JavaScript que recorra la lista y encuentre la cadena más larga. Devuelve esa cadena.

// aqui encuentro la lista mas larga
// let cadenaMaslarga = (cadena1, cadena2) =>{
// let cadenaResultante = [];
// let contador1 = 0; 
// let contador2 = 0;
// for(let i = 0; i < cadena1.length; i++ ){
//     contador1++;
// }

// for(let j = 0; j < cadena2.length; j++ ){
// contador2++;
// }
// if(contador1 < contador2){
// return cadena2;
// }else{
//     return cadena1;
// }
// }

// console.log(cadenaMaslarga([1,1,2,3,4], [2,3,4]));
// console.log(cadenaMaslarga([1,1], [2,3,4]));
// console.log(cadenaMaslarga([1,1,2,3,4], [2,3,4,6,6,6,6,6]));

let cadenaMaslarga = (lista)=>{
    let max = lista[0];
   for(let i = 0; i < lista.length; i++){
      if(max.length < lista[i].length){
        max = lista[i];
      }
   }
   return max;
}
console.log(cadenaMaslarga(['hola mundo', 'hola que tal gente', ' adios']));
console.log(cadenaMaslarga(['123', '7896', '789123456']));
console.log(cadenaMaslarga(['abxdefghijklm', 'abc', ' abxd']));