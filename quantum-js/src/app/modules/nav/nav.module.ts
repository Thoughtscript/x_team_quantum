import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CustomHeaderComponent } from "./custom-header.component"
import { CustomFooterComponent } from "./custom-footer.component"

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CustomHeaderComponent, CustomFooterComponent],
    exports: [CustomHeaderComponent, CustomFooterComponent]
})

export class NavModule { }