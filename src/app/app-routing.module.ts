import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SpecificDayComponent } from './specific-day/specific-day.component';

const routes: Routes = [
  {path: '', component: WeatherWidgetComponent},
  { path: 'specificDay/:id', component: SpecificDayComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
