import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { article } from '../model/article.model';
import { categorie } from '../model/categorie.model';
import { User } from '../model/user.model';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
 

})
export class MenuComponent implements OnInit {
  categories : categorie[];
  articles : article[];
  users : User[];

  
  constructor(public authService: AuthService,private articleService: ArticleService,
    private router: Router) {    
  }

  ngOnInit(): void {
    this.articleService.listeUser().subscribe(arts => {
      console.log(arts);
      this.users = arts;
    
    });
    this.articleService.listeArticle().subscribe(arts => {
      console.log(arts);
      this.articles = arts;
  });
  }



}
