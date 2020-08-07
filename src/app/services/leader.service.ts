import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

import { fromEvent, of } from "rxjs";
import { mergeMap, delay, takeUntil } from "rxjs/operators";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";
import { ProcessHTTPMsgService } from "../services/process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getLeaders(): Observable<Leader[]> {
    return this.http
      .get<Leader[]>(baseURL + "leadership")
      .pipe(catchError(this.processHTTPMsgService.handleERROR));
  }

  getLeader(id: number): Observable<Leader> {
    return this.http
      .get<Leader>(baseURL + "leadership/" + id)
      .pipe(catchError(this.processHTTPMsgService.handleERROR));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(baseURL + "leadership?featured=true")
      .pipe(map((leaders) => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleERROR));
  }
}
