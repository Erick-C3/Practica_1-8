/*
    juan tiene 28 magdalenas
    juan tiene 12 amigos

    le da una  magdalena a cada amigo
    juan toma una magdalena para si mismo

    cuantas manzanas quedan ?
*/

/* 
    0º planificar con la informacion obtenida
    1º crear variables para contener la informacion/valores del problema
    2º operar lo necesario
    3º la solucion / mostrar el resultado

*/

var cantMagdalenasJuan = 28;
var cantAmigosJuan = 12;
var manzanasRestantes = "valor no definido inicialmente";
var magdalenasRestantes = cantMagdalenasJuan - cantAmigosJuan - 1;

console.log("Cantidad de manzanas restantes: " + manzanasRestantes );
console.log("Cantidad de magdalenas restantes: " + magdalenasRestantes);