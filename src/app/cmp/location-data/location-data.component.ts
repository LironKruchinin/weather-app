import { Component, Input } from '@angular/core';
import { WeatherService } from '../../../services/weather.service.service'

@Component({
	selector: 'location-data',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss']
})
export class LocationDataComponent {
	constructor(private weatherService: WeatherService) { }
	@Input() location: any | undefined

	isMetric = localStorage.getItem(this.weatherService.KEY)
	dateConverter(timeStamp: number) {
		const date = new Date(timeStamp)
		return date.getHours() + ':' + date.getMinutes()
	}

	convertToF(temp: number) {
		const MEASURE_KEY = this.weatherService.KEY

		if (!this.isMetric) {
			return temp * 1
		} else {
			return temp
		}
	}
}
