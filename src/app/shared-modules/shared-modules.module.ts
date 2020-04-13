import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule
  ],
  exports: [
    MDBBootstrapModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule
  ],
})
export class SharedModulesModule { }
