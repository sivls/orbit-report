import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let satellite of fetchedSatellites) {
            this.sourceList.push(new Satellite(satellite.name, satellite.type, satellite.launchDate, 
            satellite.orbitType, satellite.operational));
          }
 
       }.bind(this));
    }.bind(this));
  }
 }
