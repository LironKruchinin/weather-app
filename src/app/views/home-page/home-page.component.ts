import { ChangeDetectorRef, Component, HostListener } from '@angular/core'
import { WeatherService } from '../../../services/weather.service.service'

@Component({
	selector: 'home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss', '../../../assets/styles/main.scss'],
	providers: [WeatherService]
})
export class HomePageComponent {
	constructor(
		public weatherService: WeatherService,
		private cdr: ChangeDetectorRef
	) { }

	username: Event | undefined
	locations: any | undefined
	isMetric: string | boolean | null = 'true'

	async ngOnInit() {
		this.locations = this.updateData()
		this.isMetric = localStorage.getItem(this.weatherService.KEY)
		await this.checkTimeStamp()
		this.cdr.detectChanges()
		console.log(this.locations)

		// Add storage event listener
		window.addEventListener('storage', this.onLocalStorageChange.bind(this))
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
		// Update the locations array and trigger change detection
		this.locations = newLocations
		this.cdr.detectChanges()
		return newLocations
	}

	updateData() {
		this.locations = this.weatherService.getWeather()
		this.cdr.detectChanges()
		return this.locations
	}

	@HostListener('window:storage', ['$event'])
	onLocalStorageChange(event: StorageEvent) {
		if (event.key === this.weatherService.LOCATIONS_KEY) {
			// Trigger change detection
			this.cdr.detectChanges()
			console.log('LocalStorage key changed:', event.key, 'New value:', event.newValue)
		}
	}
}
