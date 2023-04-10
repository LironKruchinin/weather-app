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
	constructor(private weatherService: WeatherService) { }
	data = ''
	loading = this.weatherService.loadingData
	private searchSubject = new Subject<string>()


	ngOnInit() {
		this.searchSubject
			.pipe(debounceTime(800))
			.subscribe((value) => {
				this.weatherService.loadingData = this.loading = true
				this.debouncedSearchAPI(value)
			})
	}

	onInputChange(event: any) {
		this.data = event.target.value
		this.searchSubject.next(event.target.value)
	}

	debouncedSearchAPI(data: string) {
		setTimeout(async () => {
			this.weatherService.loadingData = this.loading = false
			this.weatherService.searchData = await this.weatherService.getWeatherData(data)
			console.log('data', this.weatherService.searchData);
			return this.weatherService.searchData

		}, 1000)

	}
}
