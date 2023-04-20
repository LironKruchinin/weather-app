import { Component, Input } from '@angular/core';
import { forecastday } from '../../../types/weather/types'
import { WeatherService } from 'src/services/weather.service.service';
@Component({
	selector: 'weather-display',
	templateUrl: './weather-display.component.html',
	styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {
	constructor(public weatherService: WeatherService) { }

	@Input() weatherData: any | null

	weatherDisplay(weather: forecastday) {
		const hour = new Date().getHours()

		console.log('weather', weather.hour.slice(hour))
		return weather.hour.slice(hour)
	}
}
