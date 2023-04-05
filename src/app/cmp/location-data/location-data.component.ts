import { Component, Input } from '@angular/core';
// import { data } from '../../types/weather/types'

@Component({
	selector: 'location-data',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss']
})
export class LocationDataComponent {
	@Input() location: any | undefined

	dateConverter(timeStamp: number) {
		const date = new Date(timeStamp)
		return date.getHours() + ':' + date.getMinutes()
	}
}
