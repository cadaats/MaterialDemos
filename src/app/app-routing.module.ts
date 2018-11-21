import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: 'oms', loadChildren: './ordermanagement/ordermanagement.module#OrdermanagementModule'},
  {path: '**', redirectTo: 'oms'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
