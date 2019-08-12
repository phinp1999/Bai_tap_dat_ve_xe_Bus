import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiTapBusModule } from './bai-tap-bus/bai-tap-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BaiTapBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
