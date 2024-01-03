import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FixtureService {

    private apiUrl = 'http://localhost:8000/fixture';

    constructor(private http: HttpClient) { }

    getAllFixtures(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/getAll`)
            .pipe(
                catchError(this.handleError)
            );
    }


    getFixtureByMatchDay(matchDay: number) {
        return this.http.get<any[]>(`${this.apiUrl}/get/${matchDay}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    addFixture(bodyData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/create`, bodyData)
    }

    deletePlayer(id: string) {
        return this.http.delete<any>(`${this.apiUrl}/remove/${id}`)
    }

    private handleError(error: HttpErrorResponse) {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
    }
}