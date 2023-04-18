import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core'
import { WeatherService } from '../../../services/weather.service.service'
import { data } from 'src/app/types/weather/types'
import { Observable, Subject, Subscription } from 'rxjs'

@Component({
	selector: 'location-data',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss']
})

export class LocationDataComponent implements OnDestroy {
	constructor(private weatherService: WeatherService,
		private cdr: ChangeDetectorRef) { }

	@Input() location: any | undefined
	isMetric = localStorage.getItem(this.weatherService.KEY)
	private storageChangeSubject: Subject<void> = new Subject<void>()
	private storageChange$: Observable<void> = this.storageChangeSubject.asObservable()
	private storageChangeSubscription: Subscription | undefined

	ngOnInit() {
		// Subscribe to storage change observable and store the Subscription object
		this.storageChangeSubscription = this.storageChange$.subscribe(() => {
			this.onLocalStorageChange()
		})
	}

	ngOnDestroy() {
		// Unsubscribe from storage change observable
		if (this.storageChangeSubscription) {
			this.storageChangeSubscription.unsubscribe()
		}
	}

	timeConverter(timeStamp: string) {
		const data = timeStamp.split(' ')

		if (!localStorage.getItem(this.weatherService.KEY)) {
			let hours: number | string = +data[1].slice(0, 2)

			if (hours > 12) {
				hours = hours - 12
				return hours + data[1].slice(2) + ' PM'
			} else {
				return hours + data[1].slice(2) + ' AM'
			}
		} else {
			return data[1]
		}
	}

	convertToF(temp: number) {
		return temp
	}

	addLocation(ev: Event, location: data) {
		ev.stopPropagation()
		this.weatherService.saveLocation(location)
	}

	onLocalStorageChange() {
		// Update the location property of the component
		this.location = JSON.parse(localStorage.getItem('locationData') || '{}')

		// Trigger change detection to update the template
		this.cdr.detectChanges()
	}
}
