import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { MainComponent } from './main/main.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { TypeFilterPipe } from './type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    MainComponent,
    CopyRightComponent,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
