import { Component, OnInit } from '@angular/core';
import {Dish} from '../menu/shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../menu/shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import {leader} from '../menu/shared/leader'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
leader:leader;
  constructor(
    private DishService:DishService,
    private PromotionService:PromotionService,
    private LeaderService:LeaderService,
  ) { }

  ngOnInit(): void {
    this.dish=this.DishService.getFeaturedDish();
    this.promotion=this.PromotionService.getFeaturedPromotion();
    this.leader=this.LeaderService.getFeaturedLeader();
  }

}