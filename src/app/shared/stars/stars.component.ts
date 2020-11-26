import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  starWidth: number;
  @Input() rating = 4;
  @Output() notify: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick() {
    this.notify.emit('clicked');
  }
}
