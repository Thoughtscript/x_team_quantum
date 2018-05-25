import math
import warnings
from qiskit import QuantumProgram, QISKitError

if __name__ == '__main__':

    # Quantum Fourier Transform
    # See - QISKit: https://github.com/QISKit/qiskit-sdk-py/blob/master/examples/python/qft.py

    def input_state(circ, q, n):
        for j in range(n):
            circ.h(q[j])
            circ.u1(math.pi / float(2 ** (j)), q[j]).inverse()

    def qft(circ, q, n):
        for j in range(n):
            for k in range(j):
                circ.cu1(math.pi / float(2 ** (j - k)), q[j], q[k])
            circ.h(q[j])

    def fourier():
        try:
            # Config
            coupling_map = {0: [1, 2],
                            1: [2],
                            2: [],
                            3: [2, 4],
                            4: [2]}

            qps_specs = {
                "circuits": [
                    {
                        "name": "qft3",
                        "quantum_registers": [{
                            "name": "q",
                            "size": 5
                        }],
                        "classical_registers": [{
                            "name": "c",
                            "size": 5
                        }]
                    },
                    {
                        "name": "qft4",
                        "quantum_registers": [{
                            "name": "q",
                            "size": 5
                        }],
                        "classical_registers": [{
                            "name": "c",
                            "size": 5
                        }]
                    },
                    {
                        "name": "qft5",
                        "quantum_registers": [{
                            "name": "q",
                            "size": 5
                        }],
                        "classical_registers": [{
                            "name": "c",
                            "size": 5}
                        ]
                    }
                ]
            }

            # Prepare program
            qp = QuantumProgram(specs=qps_specs)
            q = qp.get_quantum_register("q")
            c = qp.get_classical_register("c")

            qft3 = qp.get_circuit("qft3")
            qft4 = qp.get_circuit("qft4")
            qft5 = qp.get_circuit("qft5")

            # Put qubits in superposition and measure
            input_state(qft3, q, 3)
            qft3.barrier()
            qft(qft3, q, 3)
            qft3.barrier()
            for j in range(3):
                qft3.measure(q[j], c[j])

            input_state(qft4, q, 4)
            qft4.barrier()
            qft(qft4, q, 4)
            qft4.barrier()
            for j in range(4):
                qft4.measure(q[j], c[j])

            input_state(qft5, q, 5)
            qft5.barrier()
            qft(qft5, q, 5)
            qft5.barrier()
            for j in range(5):
                qft5.measure(q[j], c[j])

            # Execute program
            result = qp.execute(["qft3", "qft4", "qft5"], backend='local_qasm_simulator', coupling_map=coupling_map, shots=1024)

            print(result)
            print(result.get_ran_qasm("qft3"))
            print(result.get_ran_qasm("qft4"))
            print(result.get_ran_qasm("qft5"))
            print(result.get_counts("qft3"))
            print(result.get_counts("qft4"))
            print(result.get_counts("qft5"))

        except QISKitError as ex:
            print('Quantum fluctuations! Eh Gad!'.format(ex))

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        fourier()
