import { Component, OnInit } from '@angular/core';
import {leader} from '../menu/shared/leader';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
leaders:leader[];
  constructor(private LeaderService:LeaderService) { }

  ngOnInit(): void {
    this.leaders=this.LeaderService.getLeaders();
  }

}
