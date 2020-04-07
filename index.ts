// Import stylesheets
import './style.css';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

//Setup a log function for logging.
const appDiv: HTMLElement = document.getElementById('app');
let log = (val:any) => {
  let ele = document.createElement('p');
  ele.append( JSON.stringify(val))
  appDiv.appendChild(ele);
}

//Describe some basic types
interface Login {
  Username: string;
  Password: string;
}

interface AuthToken {
  Data:string;
}

interface Profile {
  Name: string;
  Birthday:string;
}

// The Following functions will simulate web request Observables.
//Usually you will use some http client library to make a call to
//the server. But that wont change how we interact with the observables.

//Takes a login and gets an auth token from the server
function authorize(login:Login): Observable<AuthToken>{
  return of({Data: "aasiosof+&solfadshl93hksf"} as AuthToken).pipe(delay(500));
}  

//Gets profile data, requires a auth token.
function getProfile(): Observable<Profile> {
  return of({Name: "John Smith", Birthday:"04/01/1980"} as Profile).pipe(delay(500))
}


/** BEGIN Rxjs Tutorial */

/**
 * CHAPTER 1. 
 * Using a single Observable
 */

//#Step 1.
//We can create a new observable by calling our authorize function 
let obs = authorize({Username:"jSmith", Password: "secretPassword"})
//So far, no requests has been made. We just setup the observable that will make the request.


