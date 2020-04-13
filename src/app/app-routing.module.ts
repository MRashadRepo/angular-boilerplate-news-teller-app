import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponentsModule} from './main-components/main-components.module';


const routes: Routes = [
  {path: '', redirectTo: 'v2', pathMatch: 'full' },
  {path: 'v2', loadChildren: () => MainComponentsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
