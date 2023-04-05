import { Component } from '@angular/core';
import { } from '../../../services/weather.service.service'
@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
	isMetric: boolean = true

	changeMeasurement() {
		// console.log(this.isMetric);

	}
}
