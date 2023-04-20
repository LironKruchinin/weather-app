import { Component, Input } from '@angular/core';
import { forecastday, hour } from '../../../types/weather/types'
import { WeatherService } from 'src/services/weather.service.service';
@Component({
	selector: 'weather-display',
	templateUrl: './weather-display.component.html',
	styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {
	constructor(public weatherService: WeatherService) { }

	@Input() weatherData: any | null
	@Input() fetchedData: any | null
	isMetric = localStorage.getItem(this.weatherService.KEY)
	restOfDayWeather: hour[]

	getWeatherWithHour(weather: forecastday) {

		const hour: number = this.fetchedData.current.last_updated.split(' ')[1].slice(0, 2)
		console.log(this.weatherService.isMetric);

		console.log(weather.hour.slice(hour));
		this.restOfDayWeather = weather.hour.slice(hour)
		// return weather.hour.slice(hour)
	}
}
