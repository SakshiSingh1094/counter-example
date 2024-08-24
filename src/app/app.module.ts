import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import CounterButtonComponent from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
