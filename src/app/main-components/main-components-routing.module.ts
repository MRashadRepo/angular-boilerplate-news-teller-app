import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './container/main.component';
import {ArticleComponentComponent} from './components/article-component/article-component.component';
import {HeadlinesComponentComponent} from './components/headlines-component/headlines-component.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'everything', component: HomeComponent },
  { path: 'article-details', component: ArticleComponentComponent },
  { path: 'headlines', component: HeadlinesComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComponentsRoutingModule { }
