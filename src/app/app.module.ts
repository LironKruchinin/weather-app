import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { WeatherService } from '../services/weather.service.service'

import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeaderComponent } from './cmp/header/header.component';
import { SearchBarComponent } from './cmp/search-bar/search-bar.component';
import { LocationsComponent } from './views/locations/locations.component';
import { LocationDataComponent } from './cmp/location-data/location-data.component';
import { LocationDetailsComponent } from './views/location-data/location-data.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NonexistantComponent } from './views/nonexistant/nonexistant.component';
import { WeatherDisplayComponent } from './cmp/location-details/weather-display/weather-display.component'

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		SearchBarComponent,
		LocationsComponent,
		LocationDataComponent,
		LocationDetailsComponent,
		SettingsComponent,
		NonexistantComponent,
		WeatherDisplayComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [WeatherService],
	bootstrap: [AppComponent],
})
export class AppModule { }
