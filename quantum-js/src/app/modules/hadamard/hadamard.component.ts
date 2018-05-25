import { Component, OnInit } from "@angular/core"
import {QuantumService} from "../../services/quantum.service";

@Component({
    selector: "hadamard",
    template: `
    <main>
    </main>
  `,
    styles: [

    ]
})

export class HadamardComponent implements OnInit {

    public hadamard;

    //Inject the relevant service here
    constructor(private _quantumService: QuantumService) {  }

    ngOnInit() { this.quantumGo(); }

    quantumGo() {
        this._quantumService.hadamard( );
    }
}