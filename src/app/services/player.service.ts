import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
    private apiUrl = 'http://localhost:8000/player';

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPlayer(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  addPlayer(bodyData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, bodyData)
  }

  deletePlayer(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/remove/${id}`)
  }

  deleteByName(name: string)
  {
    return this.http.delete<any>(`${this.apiUrl}/removeByCondition/${name}`)
  }


  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}