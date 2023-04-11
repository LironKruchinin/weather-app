import { Injectable } from '@angular/core';
import data from './data.json';
import { error } from '../app/types/weather/types'
@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }
	public isMetric: string = 'true'
	KEY = 'isMetric'
	loadingData = false
	searchData: any = {}

	changeMeasurement(measurement: string) {
		this.isMetric = measurement
		localStorage.setItem(this.KEY, this.isMetric)
	}

	getWeather() {
		return data
	}

	async getWeatherData(location: string) {
		try {
			this.loadingData = true
			console.log(this.loadingData);

			const answer = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=${location}&days=7&aqi=no&alerts=no`)
			const data = await answer.json()
			this.loadingData = false
			this.searchData = data
			return data

		} catch (err) {
			console.log('Could\'nt load data', err)
			this.loadingData = false
			return 'Error loading data'
		}
	}

}



// API
// http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=$$$&days=$$$&aqi=no&alerts=no
