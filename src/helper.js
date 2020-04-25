// Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// Calcula el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'americano':
            incremento = 1.15
            break;
        case 'europeo':
            incremento = 1.30
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default:
            break;
    }

    return incremento;

}

//Calcula el total a pagar segun el plan
export function calcularPlan(plan) {
    let incremento;
    switch (plan) {
        case 'basico':
            incremento = 1.20
            break;
        case 'completo':
            incremento = 1.50
            break;
        default:
            break;

    }

    return incremento;
}

//Muestra la primer letra en mayuscula
export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}

