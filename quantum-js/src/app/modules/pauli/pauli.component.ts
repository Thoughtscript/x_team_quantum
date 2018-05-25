import {Component, OnInit} from "@angular/core";
import {QuantumService} from '../../services/quantum.service'

@Component({
    selector: "pauli",
    template: `
    <main>
    </main>
  `,
    styles: []
})

export class PauliComponent implements OnInit {


    //Inject the relevant service here
    constructor(private _quantumService: QuantumService) {  }

    ngOnInit() { this.quantumGo(); }

    quantumGo() {
        this._quantumService.pauliX( );
    }
}