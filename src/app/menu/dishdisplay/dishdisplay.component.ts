import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishdisplay',
  templateUrl: './dishdisplay.component.html',
  styleUrls: ['./dishdisplay.component.css']
})
export class DishdisplayComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
