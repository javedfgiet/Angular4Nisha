import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: HttpClient) { }

  getAllUserList() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(
        catchError(this.handleError)
      );

  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error("Something bad happened; please try again later..."))
  }

  getUsers(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
  }
}
