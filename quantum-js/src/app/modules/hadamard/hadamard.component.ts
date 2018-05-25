import {Component, OnInit} from "@angular/core"
import {QuantumService} from "../../services/quantum.service";

@Component({
    selector: "hadamard",
    template: `
    <main>
        <div>
            <h2>Hadamard Test:</h2>
            <div>{{hadamard.compute}}</div>
            <div>{{hadamard.measure}}</div>
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