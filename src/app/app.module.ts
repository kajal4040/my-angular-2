import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmartComponent } from './components/smart/smart.component';
import { HttpClientModule } from '@angular/common/http';
import { DumbComponent } from './dumb/dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
