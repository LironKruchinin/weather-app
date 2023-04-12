import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { location } from 'src/app/types/weather/types';

@Component({
	selector: 'location-data',
	templateUrl: './location-data.component.html',
	styleUrls: ['./location-data.component.scss']
})
export class LocationDataComponent {
	locationName: string | null = ''
	location$: Observable<location>
	constructor(
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.locationName = params.get('locationName')

		})
	}
}
