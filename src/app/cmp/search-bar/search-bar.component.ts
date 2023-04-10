import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { WeatherService } from 'src/services/weather.service.service';
@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
	data = ''
	loading = false
	private searchSubject = new Subject<string>()
	constructor(private weatherService: WeatherService) { }

	ngOnInit() {
		this.searchSubject
			.pipe(debounceTime(800))
			.subscribe((value) => {
				this.loading = true
				this.debouncedSearchAPI(value)
			});
	}

	onInputChange(event: any) {
		this.data = event.target.value
		this.searchSubject.next(event.target.value)
	}

	debouncedSearchAPI(data: string) {
		setTimeout(() => {
			this.loading = false
			this.weatherService.getWeatherData(data)
		}, 1000)

	}
}
