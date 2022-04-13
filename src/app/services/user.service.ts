import { catchError } from 'rxjs/operators';
import { Observable, throwError,  } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService
{

  baseUrl:string="http://localhost:8080"
constructor(private _http:HttpClient) { }
getUsers():Observable<any>
{
  // return this._http.get<any>("https://reqres.in/api/users");
  return this._http.get<any>(this.baseUrl +'/flight/all').pipe(catchError(this.errorHandler));
}


errorHandler(error: HttpErrorResponse){

  return throwError(error);
}

}
