// Import stylesheets
import './style.css';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Service } from './service';

const apiService = new Service();

//#Step 1.
//We can create a new observable by calling our authorize function 
let obs = apiService.authorize({Username:"jSmith", Password: "secretPassword"})
//So far, no requests has been made. We just setup the observable that will make the request.

//#Step 2.
//By calling the subscribe method we initiate that request. We additionally 
//provide a call back to define what should happen with the response.
obs.subscribe( response => {
    console.log("Token:")
    console.log(response)
  });

