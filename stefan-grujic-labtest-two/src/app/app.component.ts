import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stefan-grujic-labtest-two';

  readonly ROOT_URL = 'https://api.spacexdata.com/v3/launches'
  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

  launches: any;

  constructor(private http: HttpClient){}

  getPosts(){
    this.launches = this.http.get(this.ROOT_URL)
  }
}
