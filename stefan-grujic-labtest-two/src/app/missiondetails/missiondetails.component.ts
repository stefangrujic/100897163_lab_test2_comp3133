import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs';
import { Mission } from '../../app/models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  providers: [NetworkService]
})
export class MissiondetailsComponent implements OnInit {
  launches: Observable<Mission[]>;

  public flight_number_id: any;

  constructor(private network: NetworkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('flight_number'));
    this.flight_number_id = id;

    this.launches = this.network.getLaunches();
  }

}
