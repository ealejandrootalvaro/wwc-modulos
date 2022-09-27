import {JuegosRifasEspectaculos, reporteGerencia} from '../RecursosHumanos';

class Contabilidad {
    constructor() {
        console.log("Iniciando Modulo de Contabilidad")
    }

    reporteDeGastos() {
        return `
            El reporte de gastos es: 
                - Juegos y Rifas: ${JuegosRifasEspectaculos.gastos}
        `;
    }

    reporteContabilidad() {
        return "Reporte Contabilidad " + reporteGerencia();
    }

}

export default Contabilidad;