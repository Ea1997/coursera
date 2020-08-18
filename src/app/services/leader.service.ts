import { Injectable } from '@angular/core';
import{leader} from '../menu/shared/leader';
import {LEADERS} from '../menu/shared/leaders';
import { Observable, of } from 'rxjs';
import {delay,catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../menu/shared/baseUrl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  getLeaders():Observable<leader[]> {
    return this.http.get<leader[]>(baseURL + 'leadership')
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getLeader(id:number):Observable<leader> {
    return this.http.get<leader>(baseURL + 'leadership/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
 
  getFeaturedLeader():Observable<leader>{
    return this.http.get<leader[]>(baseURL + 'leadership?featured=true').pipe(map(dishes => dishes[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
