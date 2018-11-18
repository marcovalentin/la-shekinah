import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mArticles: Array<any>;

  constructor(private newsapi: NewsService) {
  }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => {
      this.mArticles = data['articles'];
      this.mArticles = this.mArticles.slice(0, 3);
      console.log(this.mArticles);
    });
  }


  searchArticles(source) {
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
