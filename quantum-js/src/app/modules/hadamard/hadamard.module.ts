import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HadamardComponent } from "./hadamard.component"

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HadamardComponent],
    exports: [HadamardComponent]
})

export class HadamardModule { }