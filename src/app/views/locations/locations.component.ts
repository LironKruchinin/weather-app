import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/types/weather/types';
import { WeatherService } from 'src/services/weather.service.service';

@Component({
	selector: 'locations',
	templateUrl: './locations.component.html',
	styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
	constructor(public weatherService: WeatherService) { }
	@Input() locations: any | undefined
	isLoading = this.weatherService.loadingData
	searchedData = this.weatherService.searchData

	ngOnInit() {
		const storedLocations = localStorage.getItem('locationStorage');
		if (storedLocations) {
			this.locations = JSON.parse(storedLocations);
		}
	}

	trackByFn(index: number, location: data) {
		return location.location.name; // Use a unique property from the location object
	}

}
