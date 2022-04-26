/*
    2.6 km desde el pueblo de juan hasta toledo 
    desde la tienda hasta la casa de su tio recorre 691 mts 

    -mostrar la distancia total recorrida en km desde el pueblo de juan hasta la casa de su tio

*/

var distPuebloJuanToledoKm = 2.6; // recorridoUnoKm
var distTiendaCasaTioMts = 691; // recorridoDosKm

var recorridoTotalJuanKm = distPuebloJuanToledoKm + distTiendaCasaTioMts/1000; // recorridoTotalFinal

console.log("Distancia total recorrida por juan es de: " + recorridoTotalJuanKm + " Km");