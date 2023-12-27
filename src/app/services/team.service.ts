import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from '../types/team';

@Injectable({
    providedIn: 'root',
})

export class TeamService {

    private apiUrl = 'http://localhost:8000/team';

    constructor(private http: HttpClient) {}


    getAllTeams(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/getAll`)
          .pipe(
            catchError(this.handleError)
          );
    }

    getPlayersNames(team: Team) :Observable<any[]>
    {
        console.log(team)
        return this.http.get<any[]>(`${this.apiUrl}/getPlayers/${team.name}`)
    }

    createTeam(bodyData: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/create`, bodyData)
    }

    private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
    }


}