import { Injectable } from '@angular/core';
import { WEATHER_KEY } from './api.key';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }
	public isMetric: string = 'true'
	KEY = 'isMetric'
	LOCATIONS_KEY = 'locationStorage'
	loadingData = false
	searchData: any = {}

	changeMeasurement(measurement: string) {
		this.isMetric = measurement
		localStorage.setItem(this.KEY, this.isMetric)
	}

	getWeather() {
		const locations = JSON.parse(localStorage.getItem(this.LOCATIONS_KEY) || "[]")
		return locations
	}

	async getLocation(location: string | null) {
		const locations = JSON.parse(localStorage.getItem(this.LOCATIONS_KEY) || "[]")

		if (!locations.find((l: any) => l.location.name === location)) {
			const answer = await this.getWeatherData(location)
			return answer
		} else return locations.find((l: any) => l.location.name === location)
	}

	async getWeatherData(location: string | null) {
		try {
			this.loadingData = true
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
		let locations = JSON.parse(localStorage.getItem(this.LOCATIONS_KEY) || "[]")
		let locationActive = locations.findIndex((l: any) => l.location.name === location?.location?.name)

		if (locationActive === -1) {
			let newLocation = { ...location, timeStamp: Date.now() }
			locations.push(newLocation)
			localStorage.setItem(this.LOCATIONS_KEY, JSON.stringify(locations))
		} else {
			locations.splice(locationActive, 1)
			localStorage.setItem(this.LOCATIONS_KEY, JSON.stringify(locations))
		}
	}
}



// API
// http://api.weatherapi.com/v1/forecast.json?key=d95d84fed6d34f0c924100153230404&q=$$$&days=$$$&aqi=no&alerts=no
