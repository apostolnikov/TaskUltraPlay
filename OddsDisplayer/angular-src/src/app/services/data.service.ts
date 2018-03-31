import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Match } from '../interfaces/match';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  postBody: any;
  selectedMatch: Match;

  constructor(public http:Http) {  }

  //Fetch all matches currently availavle
   getAllMatchesAvailable() {
     //the headers are comented because they are passed from the proxy php get file
     // let headers = new Headers();
     // headers.append('Accept', 'application/json');
     // headers.append('Content-Type', 'application/json');
     // headers.append('api-key', 'a1172ade-d72c-4c80-832c-10ab3f44de0b');
     // headers.append('isUpdate', 'true');
     return this.http.get('http://localhost/WebAPIProxyGET.php')
     	.map(res => res.json());
   }

   //Fetch all markets available for a selected event
   getAllMarketsForSelectedMatch (postBody) {
     
     // let headers = new Headers();
     // headers.append('Accept', 'application/json');
     // headers.append('Content-Type', 'application/json');
     // headers.append('api-key', 'a1172ade-d72c-4c80-832c-10ab3f44de0b');
     // headers.append('isUpdate', 'true');
     return this.http.post('http://localhost/WebAPIProxyPOST.php', postBody)
       .map(res => res.json());
     }

     storeChosenMatchData(selectedMatch) {
       this.selectedMatch = selectedMatch;
     }
     
}

