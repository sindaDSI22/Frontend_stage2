import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { article } from '../model/article.model';
import { categorie } from '../model/categorie.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  
  articles : article[];
  newArticle = new article() ;
  categories : categorie[];

  constructor(private articleService: ArticleService,

    private router: Router) { }

    newIdcat: number;
    newCategorie: categorie;
  ngOnInit(): void {
    this.articleService.listeCategorie().subscribe(arts => {
      console.log(arts);
      this.categories = arts;
    });
  }

  addArticle() {
    console.log(this.newIdcat);
    this.newCategorie = this.categories.find(art => art.idCat == this.newIdcat);
    this.newArticle.categorie = this.newCategorie;
    this.articleService.ajouterArticle(this.newArticle).subscribe(art => {
      console.log(art);
    });
    if(this.newArticle.categorie == undefined)
      console.log('insertion error');
    else
      this.router.navigate(['list-article']);


  }
}
