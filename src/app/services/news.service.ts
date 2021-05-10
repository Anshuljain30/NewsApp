import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, NewsResponse } from '../model/news';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  apiURL: string;

  constructor(private http: Http) { }

  getSectionNews(sectionName: string): any {
    // fetch news of that sectionName
    this.apiURL = `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=315a5a51483b469a918246dc2753b339`;

    return this.http.get(this.apiURL)
  }
}
