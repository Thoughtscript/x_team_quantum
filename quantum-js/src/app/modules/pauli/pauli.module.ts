import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PauliComponent} from './pauli.component'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PauliComponent],
    exports: [PauliComponent]
})

export class PauliModule {
}
