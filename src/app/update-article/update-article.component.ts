import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../model/article.model';
import { categorie } from '../model/categorie.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styles: [
  ]
})
export class UpdateArticleComponent implements OnInit {
  currentArticle = new article();
  categories : categorie[];
  currentcat= new categorie();
  constructor(private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.articleService.consulterArticle(this.activatedRoute.snapshot.params.id).
    subscribe(art => { 
      this.currentArticle = art; 
      this.currentcat = art.categorie;
      console.log("article = "+ JSON.stringify(art));
    });
  this.articleService.listeCategorie().subscribe( data => {
    this.categories = data;
    console.log(this.categories);
  })
  }

  updateArticle() {
    this.currentcat = this.categories.find(cat => cat.idCat == this.currentcat.idCat);
    this.currentArticle.categorie = this.currentcat;
    this.articleService.updateArticle(this.currentArticle).subscribe(app => {
      this.router.navigate(['list-article']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );

  }

}
