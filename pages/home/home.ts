import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: {
  	author : string,
	description : string,
	publishedAt : string,
	title : string, 
	url : string,
	urlToImage : string
  }[];
  constructor(public navCtrl: NavController,public api : ApiProvider, public loadingCtrl : LoadingController) {
  	
    let loader = this.loadingCtrl.create({
      content: "Chargement d'articles..."
    });
    loader.present();
  	api.getArticles()
            .then(Response=>{
            	this.articles = Response.json().articles;
            	loader.dismiss();
            })
            .catch(Error=>{console.log('desole error'+Error),
            	loader.dismiss();});
  }

}
