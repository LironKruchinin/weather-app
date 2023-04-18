import { Injectable } from '@angular/core';
import { WEATHER_KEY } from './api.key';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	constructor() { }
	public isMetric: string = 'true';
	KEY = 'isMetric';
	LOCATIONS_KEY = 'locationStorage';
	loadingData = false;
	searchData: any = {};
	locations: any[] = []; // define the locations property

	// Use BehaviorSubject to emit and subscribe to changes in localStorage
	private locationDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
	public locationData$ = this.locationDataSubject.asObservable();

	changeMeasurement(measurement: string) {
		this.isMetric = measurement;
		localStorage.setItem(this.KEY, this.isMetric);
	}

	getWeather() {
		this.locations = JSON.parse(localStorage.getItem(this.LOCATIONS_KEY) || "[]");
		return this.locations;
	}

	async getLocation(location: string | null) {
		this.locations = JSON.parse(localStorage.getItem(this.LOCATIONS_KEY) || "[]");

		if (!this.locations.find((l: any) => l.location.name === location)) {
			const answer = await this.getWeatherData(location);
			return answer;
		} else return this.locations.find((l: any) => l.location.name === location);
	}

	async getWeatherData(location: string | null) {
		try {
			this.loadingData = true;
			const answer = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=7&aqi=no&alerts=no`);
			const data = await answer.json();
			this.loadingData = false;
			this.searchData = data;
			return data;

		} catch (err) {
			console.log('Could\'nt load data', err);
			this.loadingData = false;
			return 'Error loading data';
		}
	}

	saveLocation(location: any) {
		let locationActive = this.locations.findIndex((l: any) => l.location.name === location?.location?.name);

		if (locationActive === -1) {
			let newLocation = { ...location, timeStamp: Date.now() };
			this.locations.push(newLocation);
			localStorage.setItem(this.LOCATIONS_KEY, JSON.stringify(this.locations));
		} else {
			this.locations.splice(locationActive, 1);
			this.updateLocations();
			localStorage.setItem(this.LOCATIONS_KEY, JSON.stringify(this.locations));
		}

		// Emit updated location data with a new reference of the locations array
		this.locationDataSubject.next([...this.locations]);
	}

	updateLocations() {
		localStorage.setItem(this.LOCATIONS_KEY, JSON.stringify(this.locations));
		// Trigger Angular change detection manually
		// You can import ChangeDetectorRef and inject it in the constructor to use it here
		// this.changeDetectorRef.detectChanges();
	}
}
