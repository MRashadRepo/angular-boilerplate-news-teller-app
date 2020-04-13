import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponentsRoutingModule } from './main-components-routing.module';
import { MainComponent } from './container/main.component';
import { HomeComponent } from './components/home/home.component';
import {HeadlinesComponentComponent} from './components/headlines-component/headlines-component.component';
import {ArticleComponentComponent} from './components/article-component/article-component.component';
import {SharedModulesModule} from '../shared-modules/shared-modules.module';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [MainComponent, HomeComponent, HeadlinesComponentComponent, ArticleComponentComponent],
  imports: [
    CommonModule,
    MainComponentsRoutingModule,
    SharedModulesModule,
    FormsModule,
    ModalModule
  ]
})
export class MainComponentsModule { }
