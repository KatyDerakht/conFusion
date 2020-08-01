import { LEADERS } from './../shared/leaders';
import { Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";


import { fromEvent,of ,Observable } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';
/* import { HttpClientModule, HttpClient } from '@angular/common/http';
import {baseURL} from '../shared/baseurl'; 
import {map} from 'rxjs/operators';

 */

import { map ,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl'; 
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';
 

@Injectable({
  providedIn: "root",
})
export class DishService {
  constructor( private http: HttpClient
    ,private processHTTPMsgService  : ProcessHTTPMsgService) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }


putDish (dish : Dish ) : Observable<Dish>
{
  const httpOptions = {
    headers : new HttpHeaders
    ({
      'Content-Type' : 'application/json'
    })
  } 
return this.http.put<Dish>(baseURL + 'dishes/' +  dish.id , dish, httpOptions )
.pipe(catchError(this.processHTTPMsgService.handleERROR));
}  

}
