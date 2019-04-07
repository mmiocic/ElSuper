import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from "./home/home.component";
import {PanCompComponent} from "./pan-comp/pan-comp.component";
import { PlayerService } from "./services/player.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    providers: [
        PlayerService
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        Page2Component,
        PanCompComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
