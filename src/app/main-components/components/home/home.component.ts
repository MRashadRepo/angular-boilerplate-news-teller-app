import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {InputService} from '../../../services/input.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  from: NgbDateStruct;
  to: NgbDateStruct;
  public sources = [];
  public articles  = [];
  public relatedArticle = {};
  public sourcesQueryParams = {
    category: 'business',
    language: 'en',
    country: null
  };

  public everythingQueryParams = {
    sources: null,
    from: null,
    to: null,
    q: '',
  };

  constructor(
    private newsService: NewsService,
    private inputService: InputService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._fillSourcesDropDown(this.sourcesQueryParams);
  }

  openModal(article, frame) {
    this.relatedArticle = article;
    frame.show();
  }

  formatDate(from, to) {
    this.everythingQueryParams.from = from ? `${from.year} - ${ from.month } - ${ from.day }` : null;
    this.everythingQueryParams.to = to ? `${to.year} - ${ to.month } - ${ to.day }` : null;
    this._getEverything(this.everythingQueryParams);
  }

  navigateToDetailsView() {
    this.inputService.publish({ type: 'article', payload: this.relatedArticle});
    this.router.navigateByUrl('/v2/article-details');
  }

  _fillSourcesDropDown(queryParams) {
    this.newsService
      .getSources(queryParams)
      .subscribe(
        (result: any) => {
          this.sources = result.sources;
        }, (err) => {
          console.log('ERROR', err);
        },
        () => {
          this.everythingQueryParams.sources = this.sources[0].id;
          this._getEverything(this.everythingQueryParams);
        });
  }

  _getEverything(queryParams) {
    this.newsService
      .getEverything(queryParams)
      .subscribe((news: any) => {
        console.log(news);
        this.articles = news.articles;
      });
  }

}
