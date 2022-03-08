import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from '../model/categorie.model';
import { ArticleService } from '../service/article.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categories : categorie[];
  newCat = new categorie();
  constructor(private articleService: ArticleService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.articleService.listeCategorie().subscribe(cat => {
      console.log(cat);
      this.categories = cat;
    });
  }

  supprimerCategorie(cat: categorie) {


    let conf = confirm("Etes-vous sûr ?");

    if (conf)
      this.articleService.supprimerCategorie(cat.idCat).subscribe(() => {
        console.log("categorie supprimé");
      });
    this.router.navigate(['list-categorie']).then(() => {
      this.SuprimerCategorieDuTableau(cat);
    });

  }
  SuprimerCategorieDuTableau(cat: categorie) {
    this.categories.forEach((cur, index) => {
      if (cat.idCat === cur.idCat) {
        this.categories.splice(index, 1);
      }
    });
  }

  chercherCat() {
    console.log(this.newCat.nomCat);
    this.articleService.rechercheParNomCat(this.newCat.nomCat).subscribe(
      app => {this.categories = app ;}
    );

}}
