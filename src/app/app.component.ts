import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg(
      'Drop Top Amber Ale',
      'Widmer Brothers',
      5,
      '5.0',
      100),

      new Keg(
        'Workhorse Lager',
        'HUB Brewing Co.',
        6,
        '6.2',
        40),

      new Keg(
        'The Vaporizer',
        'Double Mountain Brewery',
        8,
        '7.9',
        80),

      new Keg(
        'Chainbreaker White IPA',
        'Deschutes Brewery',
        9,
        '9.3',
        10),
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
}
