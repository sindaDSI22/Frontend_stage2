import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ArticleGuard } from './article.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

const routes: Routes = [
  {path :"menu" , component: MenuComponent},
  {path :"add-article", component : AddArticleComponent , canActivate:[ArticleGuard]},
  {path :"add-categorie", component : AddCategorieComponent , canActivate:[ArticleGuard]},
  {path :"list-article", component : ListArticleComponent},
  {path :"list-categorie", component : ListCategorieComponent},
  {path :"updateArticle/:id", component : UpdateArticleComponent},
  {path :"updateCategorie/:id", component : UpdateCategorieComponent},
  {path: "login", component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"" , redirectTo: "menu", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
