import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://swapi.co/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceStarwarsService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getPeoples(): Observable<any> {
    return this.http.get(endpoint + 'people/').pipe(
      map(this.extractData));
  } 
  
  getPeopleById(url): Observable<any> {
    return this.http.get(url).pipe(
      map(this.extractData));
  }

  constructor(private http: HttpClient) { }
}
