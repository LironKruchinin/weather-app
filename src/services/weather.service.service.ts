import { Injectable } from '@angular/core';
import locationsData from './data.json';
import { data, error } from '../app/types/weather/types'
import { WEATHER_KEY } from './api.key';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }
	public isMetric: string = 'true'
	KEY = 'isMetric'
	LOCATIONS = 'locationStorage'
	loadingData = false
	searchData: any = {}

	changeMeasurement(measurement: string) {
		this.isMetric = measurement
		localStorage.setItem(this.KEY, this.isMetric)
	}

	getWeather() {
		const locations = JSON.parse(localStorage.getItem(this.LOCATIONS) || "[]")
		return locations
	}

	async getWeatherData(location: string) {
		try {
			this.loadingData = true
			console.log(this.loadingData);

			const answer = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=7&aqi=no&alerts=no`)
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

	saveLocation(location: any) {

		let locations = JSON.parse(localStorage.getItem(this.LOCATIONS) || "[]")

		locations.push(location)
		localStorage.setItem(this.LOCATIONS, JSON.stringify(locations))
	}

}



// API
// http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=$$$&days=$$$&aqi=no&alerts=no
