import { Component, OnInit, Input } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Dish } from '../shared/dish';
import {DishService} from '../../services/dish.service';
@Component({
  selector: 'app-dishdisplay',
  templateUrl: './dishdisplay.component.html',
  styleUrls: ['./dishdisplay.component.css']
})
export class DishdisplayComponent implements OnInit {
  data:Dish;
  constructor(private DishService:DishService,private Location:Location,private route :ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.data=this.DishService.getDish(id);
  }
goBack(){
  this.Location.back();
}
}
