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
	timeConverter(timeStamp: string) {
		const data = timeStamp.split(' ')

		if (!localStorage.getItem(this.weatherService.KEY)) {

			let hours: number | string = +data[1].slice(0, 2)

			if (hours > 12) {
				hours = hours - 12
				return hours + data[1].slice(2) + ' PM'
			} else {
				return hours + data[1].slice(2) + ' AM'
			}
		} else {
			return data[1]

		}

	}

	convertToF(temp: number) {
		if (!this.isMetric) {
			return ((temp * 1.8) + 32)
		}
		return temp

	}

}
