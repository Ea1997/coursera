import { Injectable } from '@angular/core';
import {Dish} from '../menu/shared/dish';
import {DISHES} from '../menu/shared/dishes';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    let dish:Dish[]=DISHES
    return of(dish).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    let dish:Dish=DISHES.filter((dish) => (dish.id === id))[0];
    return of(dish).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    let dish:Dish=DISHES.filter((dish) => dish.featured)[0];;
    return of(dish).pipe(delay(2000));
  }
  getDishIds():Observable<number[] | any>{
    return of(DISHES.map(dish  => dish.id)).pipe(delay(2000));
  }
}
