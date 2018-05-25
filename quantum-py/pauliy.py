from qiskit import QuantumCircuit, ClassicalRegister, QuantumRegister
from qiskit import available_backends, execute

q = QuantumRegister(2)
c = ClassicalRegister(2)
qc = QuantumCircuit(q, c)

qc.h(q[0])
qc.measure(q, c)

print("Local backends: ", available_backends({'local': True}))

job_sim = execute(qc, "local_qasm_simulator")
sim_result = job_sim.result()

print("simulation: ", sim_result)
print(sim_result.get_counts(qc))