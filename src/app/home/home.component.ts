import { Promotion } from './../shared/promotion';
import { DishService } from './../services/dish.service';
import { Component, OnInit,Inject } from '@angular/core';
import {Dish} from '../shared/dish';
import { PromotionService } from './../services/promotion.service';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

import {LeaderService} from '../services/leader.service';
import {Location}  from '@angular/common';
import {Params ,ActivatedRoute}  from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 // leaders : Leader[];
  leader : Leader;

  dish : Dish;
  promotion:Promotion;
  dishErrMess: string;

  constructor(
    private dishService : DishService ,
    private promotionService : PromotionService,
    private leaderService : LeaderService,
    private location : Location,
    private route : ActivatedRoute ,
    @Inject('BaseURL') public BaseURL 
  ) { }

  ngOnInit() {

     this.dishService.getFeaturedDish()
     .subscribe (dish =>this.dish =dish
      , errmess => this.dishErrMess = <any>errmess);
     this.promotionService.getFeaturedPromotion()
    .subscribe (promotion => this.promotion =promotion);
    //this.leaders = this.leaderService.getLeaders();
      this.leaderService.getFeaturedLeader()
    .subscribe( leader=> this.leader = leader);
  }

}
