import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
// import { AppRoutingModule } from 'app-routing.module';

import { AppComponent } from './app.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
