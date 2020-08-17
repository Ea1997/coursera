import { Injectable } from '@angular/core';
import{leader} from '../menu/shared/leader';
import {LEADERS} from '../menu/shared/leaders';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders():Observable<leader[]> {
    let leader:leader[]=LEADERS;
    return of(leader).pipe(delay(1000));
  }
  getLeader(id:number):Observable<leader> {
    let leader:leader=LEADERS.filter((leader)=>(leader.id == id))[0]
    return of(leader).pipe(delay(1000));
  }
 
  getFeaturedLeader():Observable<leader>{
    let leader:leader=LEADERS.filter((leader)=>leader.featured)[0];
    return of(leader).pipe(delay(1000));
  }
}
