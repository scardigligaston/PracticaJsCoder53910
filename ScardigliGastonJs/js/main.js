function calcularCuotaGimnasio(mensualidad, duracionMeses) {
    return mensualidad * duracionMeses;
}

function mostrarMenu() {
    return "Bienvenido al Gimnasio Cubic\n\n" +
        "1. Oferta Especial: Abono por 6 meses (precio mensual: $6000)\n" +
        "2. Musculación + Actividad Complementaria (precio mensual: $14000)\n" +
        "3. Musculación Individual (precio mensual: $12000)\n" +
        "4. No me interesa ninguna opción";
}

const opcion = parseInt(prompt(mostrarMenu()));
let costoTotalGimnasio;

let mensualidadOferta = 6000; // Precio mensual de la oferta
let mensualidadMusculacion = 14000; // Precio mensual de Musculación + Actividad Complementaria
let mensualidadIndividual = 12000; // Precio mensual del mes individual

switch (opcion) {
    case 1:
        let duracionOferta = 6;
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadOferta, duracionOferta);
        
        break;
    case 2:
        let mesesMusculacion = parseInt(prompt("Ingrese la cantidad de meses para Musculación + Actividad Complementaria (hasta 12 meses):"));
        if (mesesMusculacion > 0 && mesesMusculacion <= 12) {
            costoTotalGimnasio = calcularCuotaGimnasio(mensualidadMusculacion, mesesMusculacion);
        } else {
            alert("Por favor, ingrese un número válido de meses (entre 1 y 12).");
        }
        break;
    case 3:
        costoTotalGimnasio = calcularCuotaGimnasio(mensualidadIndividual, 1);
        break;
    default:
        alert("Gracias por visitarnos. ¡Hasta luego!");
}

if (costoTotalGimnasio) {
    alert("El costo total es de $" + costoTotalGimnasio + " Gracias por elegirnos! te esperamos!");
}
