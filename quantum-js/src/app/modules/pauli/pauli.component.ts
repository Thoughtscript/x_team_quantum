import {Component, OnInit} from "@angular/core";
import {QuantumService} from '../../services/quantum.service'

@Component({
    selector: "pauli",
    template: `
    <main>
        <div>
            <h4>PauliX:</h4><div>Initial Parameters: {{pauliX.initial}}</div>
            <div>Result: {{pauliX.compute}}</div><div>Expected: {{pauliX.expected}}</div>
            <h4>PauliY:</h4><div>Initial Parameters: {{pauliY.initial}}</div>
            <div>Result: {{pauliY.compute}}</div><div>Expected: {{pauliY.expected}}</div>
            <h4>PauliZ:</h4><div>Initial Parameters: {{pauliZ.initial}}</div>
            <div>Result: {{pauliZ.compute}}</div><div>Expected: {{pauliZ.expected}}</div>
        </div>
    </main>
  `,
    styles: []
})

export class PauliComponent implements OnInit {
    public pauliX;
    public pauliY;
    public pauliZ;
    constructor(private _quantumService: QuantumService) {  }
    ngOnInit() { this.quantumGo(); }
    quantumGo() {
        this.pauliX = this._quantumService.pauliX();
        this.pauliY = this._quantumService.pauliY();
        this.pauliZ = this._quantumService.pauliZ();
        console.log('Pauli linear operator tests done!');
    }
}