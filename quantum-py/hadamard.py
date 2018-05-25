from qiskit import QuantumProgram

QPS_SPECS = {
    "circuits": [{
        "name": "teleport",
        "quantum_registers": [{
            "name": "q",
            "size": 3
        }],
        "classical_registers": [
            {"name": "c0",
             "size": 1},
            {"name": "c1",
             "size": 1},
            {"name": "c2",
             "size": 1},
        ]}]
}

coupling_map = {0: [1, 2],
                1: [2],
                2: [],
                3: [2, 4],
                4: [2]}

qp = QuantumProgram(specs=QPS_SPECS)
qc = qp.get_circuit("teleport")
q = qp.get_quantum_register("q")
c0 = qp.get_classical_register("c0")
c1 = qp.get_classical_register("c1")
c2 = qp.get_classical_register("c2")

qc.u3(0.3, 0.2, 0.1, q[0])

qc.h(q[1])
qc.measure(q[0], c0[0])
qc.measure(q[1], c1[0])

result = qp.get_qasm("teleport")
print(result)