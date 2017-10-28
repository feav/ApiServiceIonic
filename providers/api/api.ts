import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

        private baseUrl: string ='https://newsapi.org/v1/';
        private source: string ='the-next-web';
        private apikey :string='08460f5e11a24c129d740612e0d94c75';
        constructor(private http: Http)
        {
        }

        public getArticles ()
        {	
        	const url = this.baseUrl+"articles?source="+this.source+"&sortBy="+"latest"+"&apiKey="+this.apikey;
            return this.http.get(url).toPromise();
        }
}
