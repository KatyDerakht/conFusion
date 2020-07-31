import { Component, OnInit } from '@angular/core';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

import {LeaderService} from '../services/leader.service';
import {Location}  from '@angular/common';
import {Params ,ActivatedRoute}  from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders : Leader[];

  constructor(
    private leaderService : LeaderService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
      this.leaderService.getLeaders()
    .subscribe (leaders=> this.leaders = leaders);
  }

}
