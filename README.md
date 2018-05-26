# x_team_quantum

This repo contains the contents for the exploratory X-Team Quantum Computation article!

# Setup and Installation

Tested using [Python 3.6.x](https://www.python.org/downloads/release/python-365/)

To install dependencies into a Python `virtual environment`:
```bash
    $ python -m pip install --upgrade pip
    $ python -m venv ENV_QUANTUM
    $ source ENV_QUANTUM/Scripts/activate
```

Then, after activating the selected environment:
```bash
   $ python -m pip install -r requirements.txt
```

Our Angular 5 app leverages the `ng-cli` with these convenient scripts:
```bash
   $ npm install
   $ npm run build
   $ npm run start
```

# Quantum Tests

Each example (JavaScript and Python) implements some of the most basic and most common Quantum operations:

1.	Pauli linear operators
2.	Fourier Transform
3.	Hadamard

For more information, please check out: 

[Quantum Computing - Jozef Gruska](http://www2.fiit.stuba.sk/~kvasnicka/QuantumComputing/Gruska_QC.pdf)  
[Quantum Computing: Lecture Notes - Ronald de Wolf](https://homepages.cwi.nl/~rdewolf/qcnotes.pdf) 

And the fantastic official docs:

[QISKit](https://qiskit.org/documentation/_autodoc/qiskit.QuantumProgram.html)  
[jsqubits](http://davidbkemp.github.io/jsqubits/jsqubitsManual.html)

# Shout-outs

[Brandon Smith](https://unsplash.com/photos/xYIIemJiuJss)  
[Joey Kyber](https://unsplash.com/photos/xYIIemJiuJs)  
[Puk Patrick](https://unsplash.com/photos/QEgWlY1uxwM)  

# Licensing

MIT licensed! Free to use wherever, whenever!