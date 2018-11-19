import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://172.31.18.97:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroPersonaService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  addRegistro(persona): Observable<any> {
    console.log(persona);
    return this.http.post<any>(endpoint + 'registro', JSON.stringify(persona), httpOptions).pipe(
      tap((product) => console.log('Persona agregada: '+persona.nombres)),
      catchError(
        this.handleError<any>('addRegistro')
        ));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
