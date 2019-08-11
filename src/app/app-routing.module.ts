import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BasicComponent} from './basic/basic.component';
import {ContainedComponent} from './contained/contained.component';
import {AdvancedComponent} from './advanced/advanced.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'basic', component: BasicComponent},
  {path: 'contained', component: ContainedComponent},
  {path: 'advanced', component: AdvancedComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
