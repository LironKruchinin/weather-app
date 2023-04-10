import { Injectable } from '@angular/core';
import data from './data.json';
@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }
	public isMetric: string = 'true'
	KEY = 'isMetric'

	changeMeasurement(measurement: string) {
		this.isMetric = measurement
		localStorage.setItem(this.KEY, this.isMetric)
	}

	getWeather() {
		return data
	}
}
