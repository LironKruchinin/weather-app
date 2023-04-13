import { Component, Input } from '@angular/core';
import { data } from 'src/app/types/weather/types';
import { WeatherService } from 'src/services/weather.service.service';

@Component({
	selector: 'locations',
	templateUrl: './locations.component.html',
	styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
	constructor(public weatherService: WeatherService) { }
	@Input() locations: data[] | undefined
	isLoading = this.weatherService.loadingData
	searchedData = this.weatherService.searchData


	trackByFn(index: number, location: any) {
		return location.name;
	}
}
