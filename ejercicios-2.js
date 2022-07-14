//almacenamiento de un objeto
const meses = ["enero", 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'dicienbre']
meses.forEach(el => console.log(el));
//determianr si un numero es par o impar
let numero = 10
if (numero %2 == 0) {
    console.log('EL NUMERO '+numero+' ES PAR')
}
else {
    console.log('el numero no es par')
}
//Determinar si tiene mayuscula o minuscula
let cadena = 'Hola Mundo'
if (cadena == cadena.toUpperCase()) {
    console.log('tu cadena-- '+cadena+' --solo siente mayusculas')
}
else if (cadena == cadena.toLowerCase()) {
    console.log('tu cadena-- '+cadena +' --solo tiene minusculas')
}
else {
    console.log('tu cadena-- '+cadena+' --esta formada por mayuscula y minuscula')
}
//Calcular el factorial de un numero
let dato = 5
let resultado =dato
for (let index = dato-1; index >=1; index--) {
    resultado=resultado*index
    
}
console.log(resultado)
//definir si una palabra es palindromao

const determinar=(cadenaN) => {
    let cadena2 = cadenaN.split("")
    let reversa = cadena2.reverse()
    let unir=reversa.join("")
    console.log(unir)
    if (unir == cadenaN) {
        console.log('tu palabra '+cadenaN +' es palindromo '+unir)
    }
    else {
        console.log('no es palindromo')
    }
    return cadenaN

}

console.log(determinar('la ruta nos aporto otro paso natural'))

//ejecicio 7 
let suma = []
let repeat = {}
let cont = 0
let i = 0;
let dado = () => {
    while (i < 3600) {
        var dado1 = parseInt(6*Math.random()+1);
        var dado2 = parseInt(6*Math.random()+1);
        cont= dado1 + dado2;
        suma.push(cont);
        i++      
    }
    suma.forEach(number =>
        {    repeat[number] = (repeat[number] || 0) + 1;
        }   ); 
    return repeat;
    
}
console.log(dado())
 