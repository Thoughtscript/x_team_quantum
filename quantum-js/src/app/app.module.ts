import { AppComponent } from "./app.component"
import { AppRoutingModule } from "./app.routing"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NavModule } from "./modules/nav/nav.module"
import { QuantumService } from "./services/quantum.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        NavModule
    ],
    providers: [QuantumService],
    exports: [NavModule],
    bootstrap: [AppComponent]
})

export class AppModule {}