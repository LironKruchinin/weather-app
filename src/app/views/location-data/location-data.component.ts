import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { data, location } from 'src/app/types/weather/types';
import { WeatherService } from 'src/services/weather.service.service';

@Component({
	selector: 'location-data',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss']
})
export class LocationDataComponent {
	locationName: string | null = ''
	locationData: Array<data> | null = []
	location$: Observable<location>
	constructor(
		private weatherService: WeatherService,
		private route: ActivatedRoute) { }

	async ngOnInit() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.locationName = params.get('locationName')
		})
		this.locationData = await this.weatherService.getLocation(this.locationName)
		console.log('fetched data', this.locationData);


	}
}
