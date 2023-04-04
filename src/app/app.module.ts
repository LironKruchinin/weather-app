import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeaderComponent } from './cmp/header/header.component';
import { SearchBarComponent } from './cmp/search-bar/search-bar.component';
import { LocationsComponent } from './views/locations/locations.component';
import { LocationDataComponent } from './cmp/location-data/location-data.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		SearchBarComponent,
		LocationsComponent,
		LocationDataComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
