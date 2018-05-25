import {Component, OnInit} from "@angular/core";
import {QuantumService} from '../../services/quantum.service'

@Component({
    selector: "pauli",
    template: `
    <main>
        <div>
            <h2>PauliX:</h2><div>{{pauliX.compute}}</div><div>{{pauliX.measure}}</div>
            <h2>PauliY:</h2><div>{{pauliY.compute}}</div><div>{{pauliY.measure}}</div>
            <h2>PauliZ:</h2><div>{{pauliZ.compute}}</div><div>{{pauliZ.measure}}</div>
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