import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { WeatherService } from '../../../services/weather.service.service'
@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	providers: [WeatherService]
})
export class SettingsComponent {
	constructor(
		private weatherService: WeatherService,
		private location: Location
	) { }

	isMetric = this.weatherService.isMetric

	isClicked() {
		this.weatherService.changeMeasurement(this.isMetric)
	}

	back(): void {
		this.location.back()
	}

}
