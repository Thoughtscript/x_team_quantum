import { Component, OnInit } from "@angular/core"

@Component({
    selector: "custom-footer",
    template: `
    <footer>
        <a rel="noopener" href="https://x-team.com/blog/" target="_blank">X-Team Blog</a>
        <a rel="noopener" href="https://github.com/Thoughtscript/x_team_quantum" target="_blank">GitHub</a>
        <a rel="noopener" href="https://www.linkedin.com/in/adamintaegerard/" target="_blank">LinkedIn</a>
    </footer>
  `,
    styles: [ ]
})

export class CustomFooterComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}