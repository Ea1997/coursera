import { Component, OnInit } from '@angular/core';
import {leader} from '../menu/shared/leader';
import {LeaderService} from '../services/leader.service';
import {visibility,flyInOut,expand} from '../animations/app-animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
leaders:leader[];
  constructor(private LeaderService:LeaderService) { }

  ngOnInit(): void {
 
    this.LeaderService.getLeaders().subscribe(leaders => this.leaders = leaders);

  }

}
