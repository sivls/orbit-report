import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  satelliteCount(category: string): number {
    if (category === 'Total') {
      return this.satellites.length;
    } else {
      let count = 0;
      for (let satellite of this.satellites) {
        if (satellite.type === category) {
          count++;
        }
      }
      return count;
    }
  }
}
