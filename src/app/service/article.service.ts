import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { article } from '../model/article.model';
import { AuthService } from './auth.service';
import { categorie } from '../model/categorie.model';
import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiURL: string = 'http://localhost:8083/stock/api';
  apiURL1: string = 'http://localhost:8092/users/api';
  
  
  constructor(private http : HttpClient, private authService: AuthService) { }

  listeArticle(): Observable<article[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<article[]>(this.apiURL + "/all", { headers: httpHeaders }
    );
    }
    listeCategorie(): Observable<categorie[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.get<categorie[]>(this.apiURL + "/categories/all", { headers: httpHeaders }
      );
      }

      listeUser(): Observable<User[]>{
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.get<User[]>(this.apiURL1 + "/all", { headers: httpHeaders }
        );
        }

      supprimerArticle(id: number) {
        const url = `${this.apiURL}/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.delete(url, { headers: httpHeaders });
    
      }

      supprimerCategorie(id: number) {
        const url = `${this.apiURL}/categories/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.delete(url, { headers: httpHeaders });
    
      }

      ajouterArticle(art: article): Observable<article> {
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.post<article>(this.apiURL, art, { headers: httpHeaders });
    
      }

      ajouterCategorie(cat: categorie): Observable<categorie> {
        const url = `${this.apiURL}/categorie`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.post<categorie>(url, cat, { headers: httpHeaders });
    
      }

      updateArticle(app: article): Observable<article> {
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.put<article>(this.apiURL, app, { headers: httpHeaders });
      }

      updateCategorie(cat: categorie): Observable<categorie> {
        const url = `${this.apiURL}/categorie`;
        let jwt = this.authService.getToken();
        jwt = "Bearer " + jwt;
        let httpHeaders = new HttpHeaders({ "Authorization": jwt })
        return this.http.put<categorie>(url, cat, { headers: httpHeaders });
      }
    
  consulterArticle(id: number): Observable<article> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<article>(url, { headers: httpHeaders });

  }

  consulterCategorie(id: number): Observable<categorie> {
    const url = `${this.apiURL}/cat/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<categorie>(url, { headers: httpHeaders });

  }

  rechercheParNomArt(nom: String): Observable<article[]> {
   
    const url = `${this.apiURL}/nom/${nom}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<article[]>(url, { headers: httpHeaders }
    );
  }

  rechercheParNomCat(nom: String): Observable<categorie[]> {
   
    const url = `${this.apiURL}/nomCat/${nom}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<categorie[]>(url, { headers: httpHeaders }
    );
  }
}
