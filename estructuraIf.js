var numeroIngresado = prompt("Ingrese un numero", "0");


// podemos usar == o === (ambos funcionan similar pero  son diferentes)
// Estructura general
if( numeroIngresado == 3 ){// Primer condicion
    document.write(`
        <h2> si es igual </h2>
    `);
}else{ // Condicion por defecto - va al final de todo
    document.write(`
        <h2> NO es igual </h2>
    `);
}