import { Component } from '@angular/core';
import { WeatherService } from '../../../services/weather.service.service'
@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	providers: [WeatherService]
})
export class SettingsComponent {
	constructor(private weatherService: WeatherService) { }

	isMetric = this.weatherService.isMetric

	isClicked() {
		this.weatherService.isMetric = this.isMetric
		this.weatherService.changeMeasurement()
	}

}
