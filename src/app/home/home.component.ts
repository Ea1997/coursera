import { Component, OnInit , Inject} from '@angular/core';
import {Dish} from '../menu/shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../menu/shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import {leader} from '../menu/shared/leader';
import {flyInOut,expand} from '../animations/app-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
leader:leader;
errMess: string;
  constructor(
    private DishService:DishService,
    private PromotionService:PromotionService,
    private LeaderService:LeaderService,
    @Inject('BaseUrl') private BaseURL
  ) { }

  ngOnInit(): void {
   
    this.DishService.getFeaturedDish().subscribe(dish => {
     
      this.dish = dish
    },
    errmess => this.errMess = <any>errmess);

    this.PromotionService.getFeaturedPromotion().subscribe(promotion=>this.promotion=promotion,errmess => this.errMess = <any>errmess);

    this.LeaderService.getFeaturedLeader().subscribe(leader => this.leader = leader, errmess => this.errMess = <any>errmess);
  }

}
