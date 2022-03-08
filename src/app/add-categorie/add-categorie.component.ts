import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from '../model/categorie.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  
  categories : categorie[];
  newCat = new categorie() ;
  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addCategorie() {
    
    this.articleService.ajouterCategorie(this.newCat).subscribe(art => {
      console.log(art);
    });
   


  }
}
