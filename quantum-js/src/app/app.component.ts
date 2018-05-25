import {Component} from "@angular/core"

@Component({
    selector: "ng-root",
    template: `
        <div>
            <custom-header></custom-header>
            <router-outlet></router-outlet>
            <custom-footer></custom-footer>
        </div>
    `,
    styles: []
})

export class AppComponent {
}