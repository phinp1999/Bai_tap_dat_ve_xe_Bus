import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapBusComponent } from './bai-tap-bus.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';



@NgModule({
  declarations: [BaiTapBusComponent, ItemGheComponent, DanhSachGheComponent],
  exports: [BaiTapBusComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapBusModule { }
