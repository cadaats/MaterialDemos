import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmsAppComponent } from './oms-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path: '', component: OmsAppComponent,
    children: [
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  },
  {path: '', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdermanagementRoutingModule { }
