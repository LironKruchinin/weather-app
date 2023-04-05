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

	ngOnInit() {
		console.log(this.weatherService.getWeather())
		this.testLocation = this.weatherService.getWeather()
	}
	// logFunc(location: string) {
	// 	console.log(location)

	// }
}
