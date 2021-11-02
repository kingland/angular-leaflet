import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  //private centroid: L.LatLngExpression = [42.3601, -71.0589]; //
  private centroid: L.LatLngExpression = [13.78487,100.54089];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 6,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries and add them to map
    // const jittery = Array(5).fill(this.centroid).map( 
    //     x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
    //   ).map(
    //     x => L.marker(x as L.LatLngExpression)
    //   ).forEach(
    //     x => x.addTo(this.map)
    //   );
    
    tiles.addTo(this.map);

    const icon = new L.Icon.Default();
    icon.options.shadowSize = [0,0];

    L.marker([13.78487,100.54089], {icon: icon}).addTo(this.map)
    .bindPopup('<b>กรมสรรพากร</b><br/>90 ซอยพหลโยธิน 7 ถนนพหลโยธิน แขวงพญาไท<br/>เขตพญาไท กรุงเทพฯ 10400');
    //.openPopup();

    
    L.marker([ 13.78358,100.54003], {icon: icon}).addTo(this.map)
    .bindPopup('<b>กรมประชาสัมพันธ์</b><br/>9 ซอยอารีย์สัมพันธ์ แขวงพญาไท <br/> เขตพญาไท กรุงเทพ 10400');
   
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}

/*
map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
*/