import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { OrdermanagementRoutingModule } from './ordermanagement-routing.module';
import { OmsAppComponent } from './oms-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [OmsAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    OrdermanagementRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule
  ]
})
export class OrdermanagementModule { }
