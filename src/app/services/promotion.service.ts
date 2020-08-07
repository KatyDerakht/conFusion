import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

import { fromEvent,of  } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';
import { map ,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl'; 
import {ProcessHTTPMsgService} from '../services/process-httpmsg.service';




@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private http: HttpClient
    ,private processHTTPMsgService  : ProcessHTTPMsgService
  ) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
    //return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: number): Observable<Promotion> {
    //return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
  }


  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'PROMOTIONS?featured=true').pipe(map(PROMOTIONS => PROMOTIONS[0]))
    .pipe( catchError(this.processHTTPMsgService.handleERROR));
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));

  }
 
}
