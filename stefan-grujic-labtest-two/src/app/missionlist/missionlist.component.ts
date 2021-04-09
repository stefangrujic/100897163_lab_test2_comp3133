import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Router } from '@angular/router'

import { Observable } from 'rxjs';
import { Mission } from '../../app/models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  providers: [NetworkService]
})
export class MissionlistComponent implements OnInit {

  launches: Observable<Mission[]>;

  constructor(private network: NetworkService, private router: Router) {}

  ngOnInit(): void {
    this.launches = this.network.getLaunches();
  }

}
