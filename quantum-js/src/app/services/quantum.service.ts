import {Injectable} from '@angular/core'
import {jsqubits} from 'jsqubits'

@Injectable()
export class QuantumService {
    constructor() {
    }

    //Quantum Helpers
    pauliX() {
        return jsqubits('|01>')
            .hadamard(jsqubits.ALL)
            .cnot(1, 0)
            .hadamard(jsqubits.ALL)
            .measure(1)
            .result
    }

    pauliY() {
        return jsqubits('|01>')
            .hadamard(jsqubits.ALL)
            .cnot(1, 0)
            .hadamard(jsqubits.ALL)
            .measure(1)
            .result
    }

    pauliZ() {
        return jsqubits('|01>')
            .hadamard(jsqubits.ALL)
            .cnot(1, 0)
            .hadamard(jsqubits.ALL)
            .measure(1)
            .result
    }

    hadamard() {
        return jsqubits('|01>')
            .hadamard(jsqubits.ALL)
            .cnot(1, 0)
            .hadamard(jsqubits.ALL)
            .measure(1)
            .result
    }
}
