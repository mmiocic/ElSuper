import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestcompComponent} from './components/testcomp/testcomp.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
},
{
    path: '',
    component: HomeComponent,
},
  {
    path: 'test',
    component: TestcompComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
