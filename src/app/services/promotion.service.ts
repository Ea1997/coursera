import { Injectable } from '@angular/core';
import {Promotion} from '../menu/shared/promotion';
import{PROMOTIONS} from '../menu/shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions():Observable<Promotion[]> {
    let promo:Promotion[]=PROMOTIONS;
    return of(promo).pipe(delay(1000));
  }
  getPromotion(id:number):Observable<Promotion>{
    let promo:Promotion=PROMOTIONS.filter((promo)=>(promo.id == id))[0];
    return of(promo).pipe(delay(1000));
  }
  getFeaturedPromotion():Observable<Promotion>{
    let promo:Promotion=PROMOTIONS.filter((promo)=>promo.featured)[0];
    return of(promo).pipe(delay(1000));
  }

}
