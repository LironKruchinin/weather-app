import { Injectable } from '@angular/core';
import data from './data.json';
@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }

	public isMetric: string = 'true'
	changeMeasurement() {
		this.isMetric ? console.log(this.isMetric) : console.log(this.isMetric)
		return ''
	}

	getWeather() {
		return data
	}
}
