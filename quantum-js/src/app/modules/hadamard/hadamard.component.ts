import {Component, OnInit} from "@angular/core"
import {QuantumService} from "../../services/quantum.service";

@Component({
    selector: "hadamard",
    template: `
    <main>
        <div>
            <h4>Hadamard:</h4><div>Initial Parameters: {{hadamard.initial}}</div>
            <div>Result: {{hadamard.compute}}</div><div>Expected: {{hadamard.expected}}</div>
            <h4>Fourier:</h4><div>Initial Parameters: {{fourier.initial}}</div>
            <div>Result: {{fourier.compute}}</div><div>Expected: {{fourier.expected}}</div>
        </div>
    </main>
  `,
    styles: [

    ]
})

export class HadamardComponent implements OnInit {
    public hadamard;
    public fourier;
    constructor(private _quantumService: QuantumService) {  }
    ngOnInit() { this.quantumGo(); }
    quantumGo() {
        this.hadamard = this._quantumService.hadamard();
        console.log('Hadamard test done!');
        this.fourier = this._quantumService.fourier();
        console.log('Fourier transform test done!');
    }
}