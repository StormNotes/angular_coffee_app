import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-component',
  templateUrl: './start-component.component.html',
  styleUrls: ['./start-component.component.css']
})
export class StartComponentComponent implements OnInit {
  @Input() rating: number;
  starWidth: number ;

  ngOnChange(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  constructor() { }

  ngOnInit() {
  }

}
