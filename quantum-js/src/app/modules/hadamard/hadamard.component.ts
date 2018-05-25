import {Component, OnInit} from "@angular/core"
import {QuantumService} from "../../services/quantum.service";

@Component({
    selector: "hadamard",
    template: `
    <main>
        <div>
            <h3>Hadamard Test:</h3><div>{{hadamard.compute}}</div><div>{{hadamard.measure}}</div>
            <h3>Initial Parameters:</h3><div>{{hadamard.initial}}</div>
        </div>
    </main>
  `,
    styles: [

    ]
})

export class HadamardComponent implements OnInit {
    public hadamard;
    constructor(private _quantumService: QuantumService) {  }
    ngOnInit() { this.quantumGo(); }
    quantumGo() {
        this.hadamard = this._quantumService.hadamard();
        console.log('Hadamard test done!');
    }
}