import { Injectable } from '@angular/core';
import data from './data.json';
@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor() {
	}

	getWeather() {
		return data
	}
}
