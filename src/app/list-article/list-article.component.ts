import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { article } from '../model/article.model';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles: article[];
  newArt = new article();
  constructor(private articleService: ArticleService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.articleService.listeArticle().subscribe(arts => {
      console.log(arts);
      this.articles = arts;
    });

  }
  supprimerArticle(art: article) {


    let conf = confirm("Etes-vous sûr ?");

    if (conf)
      this.articleService.supprimerArticle(art.idArticle).subscribe(() => {
        console.log("artilce supprimé");
      });
    this.router.navigate(['list-article']).then(() => {
      this.SuprimerArticleDuTableau(art);
    });

  }
  SuprimerArticleDuTableau(art: article) {
    this.articles.forEach((cur, index) => {
      if (art.idArticle === cur.idArticle) {
        this.articles.splice(index, 1);
      }
    });
  }

  chercherArt() {
    console.log(this.newArt.nomArticle);
    this.articleService.rechercheParNomArt(this.newArt.nomArticle).subscribe(
      app => {this.articles = app ;}
    );

}}
