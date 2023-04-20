import { Component, Input } from '@angular/core';

@Component({
	selector: 'weather-display',
	templateUrl: './weather-display.component.html',
	styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {
	@Input() weatherData: any | null
}
