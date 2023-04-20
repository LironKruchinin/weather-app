import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { data, location } from 'src/app/types/weather/types';
import { WeatherService } from 'src/services/weather.service.service';

@Component({
	selector: 'location-details',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss'],
})
export class LocationDetailsComponent {
	locationName: string | null = ''
	locationData: any | null = []
	location$: Observable<location>
	weatherLength: number
	constructor(
		private weatherService: WeatherService,
		private route: ActivatedRoute) { }

	async ngOnInit() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.locationName = params.get('locationName')
		})
		this.locationData = await this.weatherService.getLocation(this.locationName)
	}

	getWeatherLength(length: number) {
		console.log('length', length);
		this.weatherLength = length
	}
}
