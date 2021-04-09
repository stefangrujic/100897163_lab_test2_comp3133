import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../app/models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  readonly ROOT_URL = 'https://api.spacexdata.com/v3/launches'

  launches: Observable<Mission[]>;

  constructor(private http: HttpClient) { }

  getLaunches(){
    return this.launches = this.http.get<Mission[]>(this.ROOT_URL)
  }
}
