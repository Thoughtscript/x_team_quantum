import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./modules/home/home.component"
import { PauliComponent } from "./modules/pauli/pauli.component"
import { HadamardComponent } from "./modules/hadamard/hadamard.component"

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pauli",
        component: PauliComponent
    },
    {
        path: "hadamard",
        component: HadamardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}