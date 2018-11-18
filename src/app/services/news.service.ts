import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = '0ea6060e22e54e8ea176c585b14892d3';

  constructor(private http: HttpClient) { }

  initArticles() {
   return this.http.get('https://newsapi.org/v2/everything?q=madagascar&sortBy=publishedAt&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
