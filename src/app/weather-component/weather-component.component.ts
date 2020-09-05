import {Component, Input} from '@angular/core';
import {faCloud, faCloudRain, faSun} from '@fortawesome/free-solid-svg-icons';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class WeatherComponentComponent {
  @Input() ngClass;
  @Input() weatherOfTheCity;
  @Input() howMany;

  getIcons(index): object{
    let condition;
    console.log(this.weatherOfTheCity);
    switch (this.weatherOfTheCity[index].weather[0].main) {
      case'Rain':
        condition = faCloudRain;
        break;
      case'Clear':
        condition = faSun;
        break;
      case'Clouds':
        condition = faCloud;
        break;
    }
    return condition;
  }

}
