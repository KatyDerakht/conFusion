import { DishService } from './../services/dish.service';
import { Component, OnInit ,Inject } from '@angular/core';
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
 
   dishes: Dish[];
   
   constructor(private dishService: DishService,
    @Inject('BaseURL') public BaseURL) { }
  
    ngOnInit() {

    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }


}

/*   onSelect(dish : Dish)
  {
  this.selectedDish = dish;
  } */

    //dishes: Dish[] = DISHES;

  //selectedDish = this.dishes[0];


  //selectedDish : Dish;