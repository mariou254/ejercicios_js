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
var a = b = c = d = e = f = 0;
        var totalTiradas = 0;
          
        function tiradaDado(){
            var dado6caras = parseInt(6*Math.random()+1);
            return dado6caras;
        }
        
        for(i=1;i<=3600;i++){
            tirada = tiradaDado();
            switch(tirada){
                case 1:
                    a++;
                    break;
                case 2:
                    b++;
                    break;
                case 3:
                    c++;
                    break;
                case 4:
                    d++;
                    break;
                case 5:
                    e++;
                    break;
                case 6:
                    f++;
                    break;
            }
        }
        totalTiradas = a+b+c+d+e+f;
        
        console.log("El 1 ha salido " +  a + " veces<br>");
        console.log("El 2 ha salido " +  b + " veces<br>");
        console.log("El 3 ha salido " +  c + " veces<br>");
        console.log("El 4 ha salido " +  d + " veces<br>");
        console.log("El 5 ha salido " +  e + " veces<br>");
        console.log("El 6 ha salido " +  f + " veces<br>");
        console.log("Total de lanzamientos del dado: " + totalTiradas);