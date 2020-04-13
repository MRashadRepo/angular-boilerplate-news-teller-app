import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {InputService} from '../../../services/input.service';
import {Router} from '@angular/router';
import {categories} from '../../../constants/categories';
import {countries} from '../../../constants/countries';

@Component({
  selector: 'app-headlines-component',
  templateUrl: './headlines-component.component.html',
  styleUrls: ['./headlines-component.component.css']
})
export class HeadlinesComponentComponent implements OnInit {
  public sources = [];
  public countries = [];
  public categories = [];
  public articles  = [];
  public relatedArticle = {};
  public sourcesQueryParams = {
    category: categories[0].code,
    language: 'en',
    country: 'us'
  };

  public topHeadlinesQueryParams = {
    sources: null,
    country: null,
    category: null,
    q: '',
  };
  constructor(
    private newsService: NewsService,
    private inputService: InputService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories = categories;
    this.countries = countries;
    this._fillSourcesDropDown(this.sourcesQueryParams);
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
          this.topHeadlinesQueryParams.sources = this.sources[0].id;
          this._getTopHeadlines(this.topHeadlinesQueryParams);
        });
  }

  _getTopHeadlines(queryParams) {
    this.newsService
      .getTopHeadlines(queryParams)
      .subscribe((news: any) => {
        console.log(news);
        this.articles = news.articles;
      });
  }

}
