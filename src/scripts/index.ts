import { NgModule, ModuleWithProviders } from '@angular/core';

const MODULES = [

];

@NgModule({
    imports: MODULES.map(m => m.forRoot()),
    exports: MODULES,
    providers: []
})
export class NguiModule { }


@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class NguiNonRootModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: NguiModule };
    }
}