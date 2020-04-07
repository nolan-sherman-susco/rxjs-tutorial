import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ILogin, IAuthToken, IProfile } from './interface';

export class Service {
  //Takes a login and gets an auth token from the server
  authorize(login:ILogin): Observable<IAuthToken>{
    return of({Key: "aasiosof+&solfadshl93hksf"} as IAuthToken).pipe(delay(500));
  }  

  //Gets profile data, requires a auth token.
  getProfile(): Observable<IProfile> {
    return of({Name: "John Smith", Birthday:"04/01/1980"} as IProfile).pipe(delay(500))
  }
}