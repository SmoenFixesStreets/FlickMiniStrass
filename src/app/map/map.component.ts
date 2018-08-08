import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() mapClick: EventEmitter<any> = new EventEmitter();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 15,
    center: latLng(46.956, 7.450)
  };

  layers = [];

  mapHeight = 750;

  constructor() {
  }

  ngOnInit() {

  }

  handleClick(event) {
    this.mapClick.emit(event.latlng);
    this.layers = [marker([event.latlng.lat, event.latlng.lng], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    })];
    console.log(this.layers);
  }

  ngAfterViewChecked() {
    setTimeout(() => {

      this.mapHeight = document.documentElement.clientHeight - 65;
    });
  }
}
