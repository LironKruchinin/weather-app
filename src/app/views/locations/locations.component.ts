import { Component, Input } from '@angular/core';
import { current, data } from 'src/app/types/weather/types';

@Component({
	selector: 'locations',
	templateUrl: './locations.component.html',
	styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
	@Input() locations: data[] | undefined
}
