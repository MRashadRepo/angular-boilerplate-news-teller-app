import { Component, OnInit } from '@angular/core';
import {distinctUntilChanged, filter} from 'rxjs/operators';
import {InputService} from '../../../services/input.service';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {
  public article;
  constructor(
    private inputService: InputService
  ) { }

  ngOnInit(): void {
    this.inputService.getInput$().pipe(
      filter(x => x.type === 'article'),
      distinctUntilChanged()
    ).subscribe(input => this.article = input.payload);
  }

}
