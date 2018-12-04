import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'https://angular-material-api.azurewebsites.net/users';
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  };

  constructor(private httpClient: HttpClient) {
    this.dataStore = {users: []};
    this._users = <BehaviorSubject<User[]>>new BehaviorSubject([]);
  }

  loadAll() {
    return this.httpClient.get<User[]>(this.usersURL)
            .subscribe(data => {
              this.dataStore.users = data;
              this._users.next(Object.assign({}, this.dataStore).users);
            }, error => {
              console.log('Failed to fetch users');
            });
  }
  get users(): Observable<User[]> {
    return this._users.asObservable();
    // return this.httpClient.get<User[]>(this.usersURL).pipe(
    //   // tap(data => console.log('All: ' + JSON.stringify(data))),
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if ( err.error instanceof  ErrorEvent ) {
      errorMessage = `Error occured: ${err.error.message}`;
    }    else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
