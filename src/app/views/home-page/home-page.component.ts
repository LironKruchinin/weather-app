import { Component } from '@angular/core';
import { data, location, current, forecast } from 'src/app/types/weather/types';
import { WeatherService } from '../../../services/weather.service.service';

@Component({
	selector: 'home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss', '../../../assets/styles/main.scss'],
	providers: [WeatherService]
})

export class HomePageComponent {
	constructor(private weatherService: WeatherService) { }

	username: Event | undefined
	testLocation: any | undefined
	isMetric: string | boolean | null = 'true'

	ngOnInit() {
		console.log(this.weatherService.getWeather())
		this.testLocation = this.weatherService.getWeather()
		this.isMetric = localStorage.getItem(this.weatherService.KEY)
		console.log('homepageCMP', this.isMetric);
	}
	// logFunc(location: string) {
	// 	console.log(location)

	// }
}
