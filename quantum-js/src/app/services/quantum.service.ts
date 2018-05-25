import {Injectable} from '@angular/core'
import {jsqubits} from 'jsqubits'

@Injectable()
export class QuantumService {

    private QUBIT_ZERO = '|00>';
    private QUBIT_ONE = '|01>';
    private QUBIT_COMPLEX_ONE = '(i)|01>';
    private QUBIT_MINUS_ONE = '(-1)|01>';
    private QUBIT_ONE_ZERO_ZERO = '|100>';
    private HADAMARD_RESULT = '(0.7071)|00> + (0.7071)|01>';
    private QFT_RESULT = '(0.5)|000> + (-0.5)|010> + (0.5)|100> + (-0.5)|110>';

    constructor() {
    }

    pauliX() {
        let x = jsqubits(this.QUBIT_ONE).x(0);
        return {
            initial: this.QUBIT_ONE,
            compute: x.toString(),
            expected: this.QUBIT_ZERO
        }
    }

    pauliY() {
        let y = jsqubits(this.QUBIT_ZERO).y(0);
        return {
            initial: this.QUBIT_ONE,
            compute: y.toString(),
            expected: this.QUBIT_COMPLEX_ONE
    }
    }

    pauliZ() {
        let z = jsqubits(this.QUBIT_ONE).z(0);
        return {
            initial: this.QUBIT_ONE,
            compute: z.toString(),
            expected: this.QUBIT_MINUS_ONE
        }
    }

    hadamard() {
        let h = jsqubits(this.QUBIT_ZERO).hadamard(0);
        return {
           initial: this.QUBIT_ZERO,
           compute: h.toString(),
           expected: this.HADAMARD_RESULT
        }
    }

    fourier() {
        let f = jsqubits(this.QUBIT_ONE_ZERO_ZERO).qft([1,2]);
        return {
            initial: this.QUBIT_ONE_ZERO_ZERO,
            compute: f.toString(),
            expected: this.QFT_RESULT
        }

    }
}
