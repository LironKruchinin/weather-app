import { Component } from '@angular/core';
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
	locations: any | undefined
	isMetric: string | boolean | null = 'true'

	ngOnInit() {
		this.locations = this.weatherService.getWeather()
		this.isMetric = localStorage.getItem(this.weatherService.KEY)
		this.checkTimeStamp()
	}

	checkTimeStamp() {
		// const hour = 3600000
		const hour = 360
		this.locations.map(async (location: any) => {
			if (Date.now() - location.timeStamp > hour) {
				console.log(location.location.name)

				// const newLocationData = await this.weatherService.getWeatherData(location.location.name)
				// console.log(newLocationData);

			}

		})
	}

}
