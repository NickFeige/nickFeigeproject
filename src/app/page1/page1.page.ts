
import { Component, OnInit } from '@angular/core';
//imported the api
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
//added geo location here with lat and long 
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  constructor() { }
  async getGPS() {
    //control to add api reading to lat and long 
    //so that it can be passed to html and be displayed 
    
  this.coordinates = await Geolocation.getCurrentPosition();
  this.lat = this.coordinates.coords.latitude;
  this.long = this.coordinates.coords.longitude;
  }
    
  ngOnInit() { }
  
    
}

