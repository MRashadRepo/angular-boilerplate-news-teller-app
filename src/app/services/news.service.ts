import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getSources(queryParams) {
    let params = new HttpParams();
    params = params.append('apiKey', environment.NEWS_API_KEY);
    if (queryParams.category) { params = params.append('catgeory', queryParams.category); }
    if (queryParams.language) { params = params.append('language', queryParams.language); }
    if (queryParams.country) { params = params.append('country', queryParams.country); }

    return this.http.get('https://newsapi.org/v2/sources', { params });
  }

  getEverything(queryParams) {
    let params = new HttpParams();
    params = params.append('apiKey', environment.NEWS_API_KEY);
    if (queryParams.q) { params = params.append('q', queryParams.q); }
    if (queryParams.language) { params = params.append('language', queryParams.language); }
    if (queryParams.sources) { params = params.append('sources', queryParams.sources); }
    if (queryParams.from) { params = params.append('from', queryParams.from); }
    if (queryParams.to) { params = params.append('to', queryParams.to); }
    if (queryParams.pageSize) { params = params.append('pageSize', queryParams.pageSize); }
    if (queryParams.page) { params = params.append('page', queryParams.page); }

    return this.http.get('https://newsapi.org/v2/everything', { params });
  }

  getTopHeadlines(queryParams) {
    let params = new HttpParams();
    params = params.append('apiKey', environment.NEWS_API_KEY);
    if (queryParams.q) { params = params.append('q', queryParams.q); }
    if (queryParams.sources) { params = params.append('sources', queryParams.sources); }
    if (queryParams.pageSize) { params = params.append('pageSize', queryParams.pageSize); }
    if (queryParams.page) { params = params.append('page', queryParams.page); }
    if (queryParams.category) { params = params.append('catgeory', queryParams.category); }
    if (queryParams.country) { params = params.append('country', queryParams.country); }

    return this.http.get('https://newsapi.org/v2/top-headlines', { params });
  }
}
