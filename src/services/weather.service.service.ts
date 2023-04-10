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

	async getWeatherData(location: string) {
		console.log(`http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=${location}&days=7&aqi=no&alerts=no`);
		try {
			const answer = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=${location}&days=7&aqi=no&alerts=no`)
			console.log(answer.json());

		} catch (err) {

		}
	}

}



// API
// http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=$$$&days=$$$&aqi=no&alerts=no
