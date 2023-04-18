import { Component } from '@angular/core'
import { WeatherService } from '../../../services/weather.service.service'

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

	async ngOnInit() {
		this.locations = this.weatherService.getWeather()
		this.isMetric = localStorage.getItem(this.weatherService.KEY)
		this.checkTimeStamp()


	}

	async checkTimeStamp() {
		const hour = 3600000
		const newLocations = await Promise.all(
			this.locations.map(async (location: any) => {
				if (Date.now() - location.timeStamp > hour) {
					const newLocationData = await this.weatherService.getWeatherData(location.location.name)
					let newLocation = { ...newLocationData, timeStamp: Date.now() }
					return newLocation
				} else {
					return location
				}
			})
		)

		localStorage.setItem(this.weatherService.LOCATIONS_KEY, JSON.stringify(newLocations))
		return newLocations
	}


}
