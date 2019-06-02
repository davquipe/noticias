import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';



const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  private ejecutarQuery( query: string ) {

    query = apiUlr + query;

    return this.http.get( query, { headers } );

  }



  getTopHeadlines() {
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd7ce9e65df74b58a68454c736c88833`);
    return this.ejecutarQuery(`/top-headlines?country=us`);
  }

  getTopHeadlinesCategoria( categoria: string ) {
    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=bd7ce9e65df74b58a68454c736c88833`)
    return this.ejecutarQuery(`top-headlines?country=us&category=${ categoria }`);
  }

}