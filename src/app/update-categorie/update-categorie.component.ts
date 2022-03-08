import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from '../model/categorie.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styles: [
  ]
})
export class UpdateCategorieComponent implements OnInit {

  currentcat= new categorie();
  constructor(private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.articleService.consulterCategorie(this.activatedRoute.snapshot.params.id).
    subscribe(cat => { 
      this.currentcat = cat; 
    });
    console.log(this.currentcat);

  }

  updateCategorie() {
    this.articleService.updateCategorie(this.currentcat).subscribe(app => {
      this.router.navigate(['list-categorie']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );

  }

}
