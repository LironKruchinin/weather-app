import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NonexistantComponent } from './views/nonexistant/nonexistant.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'settings', component: SettingsComponent },
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: '**', component: NonexistantComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
