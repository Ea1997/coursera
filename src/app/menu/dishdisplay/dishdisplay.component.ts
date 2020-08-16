import { Component, OnInit, Input } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Dish } from '../shared/dish';
import {DishService} from '../../services/dish.service';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-dishdisplay',
  templateUrl: './dishdisplay.component.html',
  styleUrls: ['./dishdisplay.component.css']
})
export class DishdisplayComponent implements OnInit {
  dish:Dish;
  dishIds:number[];
  prev:number;
  next:number;
  constructor(private DishService:DishService,private Location:Location,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.DishService.getDishIds().subscribe(dishes => this.dishIds=dishes);
    this.route.params.pipe(switchMap((params:Params) => this.DishService.getDish(params['id'])))
    .subscribe(dish => 
    {
      this.dish=dish;
      this.setPrevNext(dish.id);
    });
  
  
  }
  setPrevNext(dishId:number){
    const index=this.dishIds.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next=this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
  }
goBack(){
  this.Location.back();
}
}
