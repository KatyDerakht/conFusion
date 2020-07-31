import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';

import { MatListModule } from '@angular/material/list';
import {MaterialModule} from '../shared/material.module';

///import {DISHES} from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  //dishes: Dish[] = DISHES;

  //selectedDish = this.dishes[0];
   dishes: Dish[];
   selectedDish : Dish;

  constructor(
    private dishService  : DishService) { }

  ngOnInit() {

    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  onSelect(dish : Dish)
  {
  this.selectedDish = dish;
  }
}
