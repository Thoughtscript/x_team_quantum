import {Component, OnInit} from "@angular/core"

@Component({
    selector: "custom-header",
    template: `
        <header>
            <h1>X-Team Quantum</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="pauli">Pauli</a>
                    </li>
                    <li>
                        <a href="hadamard">Hadamard</a>
                    </li>
                </ul>
            </nav>s
        </header>
    `,
    styles: []
})

export class CustomHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}