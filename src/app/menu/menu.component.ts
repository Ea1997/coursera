import { Component, OnInit } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import {DishService} from '../services/dish.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish:Dish;
  constructor(private dishService:DishService) { 
    
  }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(dished => this.dishes=dished);
    console.log(this.dishes)
  }
change(dish : Dish){
this.selectedDish=dish;
}
}
