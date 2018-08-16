import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-tap-room',
  templateUrl: './tap-room.component.html',
  styleUrls: ['./tap-room.component.css']
})
export class TapRoomComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(kegToSellFrom: Keg) {
    kegToSellFrom.pintsRemaining -= 1;
  }

  emptinessColor(currentKeg) {
    if (currentKeg.pintsRemaining <= 25) {
      return "btn btn-danger";
    } else if (currentKeg.pintsRemaining <= 75) {
      return "btn btn-warning";
    } else if (currentKeg.pintsRemaining <= 124) {
      return "btn btn-success";
    } else {
      return "btn btn-primary";
    }
  }

  filterByEmptiness: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  toggleEmpty(clickedKeg: Keg, setEmptiness: boolean) {
    clickedKeg.emptiness = setEmptiness;
    clickedKeg.pintsRemaining = 0;
  }
}
