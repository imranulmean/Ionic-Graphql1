import { Component } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apollo:Apollo) {
		this.apollo
		.watchQuery({
		query: gql`
		  {
		    events{
		      _id
		      title
		      desc
		    }
		  }
		`,
		})
		.valueChanges.subscribe(result => {
		 	console.log(result);
		});  	
  }

}
