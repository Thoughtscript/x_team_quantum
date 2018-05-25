import {Injectable} from '@angular/core'
import {jsqubits} from 'jsqubits'

@Injectable()
export class QuantumService {
    constructor() {
    }

    pauliX() {
        const state = '|01>';
        let x = jsqubits(state).cnot(1, 0);
        return {
            initial: state,
            compute: x.toString(),
            measure: x.measure(1).toString()
        }
    }

    pauliY() {
        const state = '|111>';
        let y = jsqubits(state).cnot(1, 0);
        return {
            initial: state,
            compute: y.toString(),
            measure: y.measure(1).toString()
        }
    }

    pauliZ() {
        const state = '|000>';
        let z = jsqubits(state).cnot(1, 0);
        return {
            initial: state,
            compute: z.toString(),
            measure: z.measure(1).toString()
        }
    }

    hadamard() {
        const state = '|011>';
        let h = jsqubits(state).hadamard(jsqubits.ALL);
        return {
           initial: state,
           compute: h.toString(),
           measure: h.measure(1).toString()
        }
    }
}
