export interface error {
	error: string | null
}

export interface data {
	location: location,
	current: current,
	forecast: forecast
}

export interface location {
	name: string,
	region: string,
	country: string,
	lat: number,
	lon: number,
	tz_id: string,
	localtime_epoch: number,
	localtime: string
}

export interface current {
	last_updated_epoch: number,
	last_updated: string,
	temp_c: number,
	temp_f: number,
	is_day: number,
	condition: condition,
	wind_mph: number,
	wind_kph: number,
	wind_degree: number,
	wind_dir: string,
	pressure_mb: number,
	pressure_in: number,
	precip_mm: number,
	precip_in: number,
	humidity: number,
	cloud: number,
	feelslike_c: number,
	feelslike_f: number,
	vis_km: number,
	vis_miles: number,
	uv: number,
	gust_mph: number,
	gust_kph: number
}

export interface forecast {
	forecastday: forecastday
}
interface forecastday {
	date: string,
	date_epoch: number,
	day: day,
	astro: astro,
	hour: hour
}

interface condition {
	text: string,
	icon: string,
	code: number
}

interface day {
	maxtemp_c: number,
	maxtemp_f: number,
	mintemp_c: number,
	mintemp_f: number,
	avgtemp_c: number,
	avgtemp_f: number,
	maxwind_mph: number,
	maxwind_kph: number,
	totalprecip_mm: number,
	totalprecip_in: number,
	totalsnow_cm: number,
	avgvis_km: number,
	avgvis_miles: number,
	avghumidity: number,
	daily_will_it_rain: number,
	daily_chance_of_rain: number,
	daily_will_it_snow: number,
	daily_chance_of_snow: number,
	condition: condition,
	uv: number
}

interface astro {
	sunrise: string,
	sunset: string,
	moonrise: string,
	moonset: string,
	moon_phase: string,
	moon_illumination: string,
	is_moon_up: number,
	is_sun_up: number
}

interface hour {
	time_epoch: number,
	time: string,
	temp_c: number,
	temp_f: number,
	is_day: number,
	condition: condition,
	wind_mph: number,
	wind_kph: number,
	wind_degree: number,
	wind_dir: string,
	pressure_mb: number,
	pressure_in: number,
	precip_mm: number,
	precip_in: number,
	humidity: number,
	cloud: number,
	feelslike_c: number,
	feelslike_f: number,
	windchill_c: number,
	windchill_f: number,
	heatindex_c: number,
	heatindex_f: number,
	dewpoint_c: number,
	dewpoint_f: number,
	will_it_rain: number,
	chance_of_rain: number,
	will_it_snow: number,
	chance_of_snow: number,
	vis_km: number,
	vis_miles: number,
	gust_mph: number,
	gust_kph: number,
	uv: number
}[]
