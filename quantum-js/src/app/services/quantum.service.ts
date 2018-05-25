import {Injectable} from '@angular/core'
import {jsqubits} from 'jsqubits'

@Injectable()
export class QuantumService {
    constructor() {
    }

    pauliX() {
        let x = jsqubits('|01>').cnot(1, 0);
        return {
            compute: x.toString(),
            measure: x.measure(1).toString()
        }
    }

    pauliY() {
        let y = jsqubits('|01>').cnot(1, 0);
        return {
            compute: y.toString(),
            measure: y.measure(1).toString()
        }
    }

    pauliZ() {
        let z = jsqubits('|01>').cnot(1, 0);
        return {
            compute: z.toString(),
            measure: z.measure(1).toString()
        }
    }

    hadamard() {
        let h = jsqubits('|01>').hadamard(jsqubits.ALL);
        return {
           compute: h.toString(),
           measure: h.measure(1).toString()
        }
    }
}
