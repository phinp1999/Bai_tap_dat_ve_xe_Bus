import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  trangThaiChon: boolean = false;
  @Input() Ghe;
  @Output() eventDatGhe = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  datGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    this.eventDatGhe.emit(this.trangThaiChon);
  }
}
