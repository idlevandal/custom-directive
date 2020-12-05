import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckNumDirective } from './check-num.directive';
import { TooltipDirective } from './tooltip.directive';
import { ElasticInputDirective } from './elastic-input.directive';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckNumDirective,
    TooltipDirective,
    ElasticInputDirective,
    RainbowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
