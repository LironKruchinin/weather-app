import { Component, EventEmitter, Input, Output } from '@angular/core';
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
	@Output() weatherLength = new EventEmitter<number>();
	isMetric = localStorage.getItem(this.weatherService.KEY)
	restOfDayWeather: hour[]
	// public weatherLength: number
	getWeatherWithHour(weather: forecastday) {

		const hour: number = this.fetchedData.current.last_updated.split(' ')[1].slice(0, 2)
		const currDate: string = this.fetchedData.current.last_updated.split(' ')[0].slice(-2)

		for (let w in weather.hour) {
			// console.log('w', this.weatherLength);
			this.weatherLength.emit(+w)
			// this.weatherLength = +w
			if (weather.hour[w].time.split(' ')[0].slice(-2) > currDate) {
				this.restOfDayWeather = weather.hour
			} else {
				this.restOfDayWeather = weather.hour.slice(hour)
			}
		}
	}
}
