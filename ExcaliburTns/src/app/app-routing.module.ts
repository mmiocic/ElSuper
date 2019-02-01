import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { Page2Component } from "./page2/page2.component";
import {PanCompComponent} from "./pan-comp/pan-comp.component"

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "page2", component: Page2Component},
    {path: "panComp", component: PanCompComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
