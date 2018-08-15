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

  emptinessColor(currentKeg) {
    if (currentKeg.pintsRemaining <= 10) {
      return "bg-danger";
    } else if (currentKeg.pintsRemaining <= 60) {
      return "bg-warning";
    } else if (currentKeg.pintsRemaining <= 124) {
      return "bg-success";
    } else {
      return "bg-primary";
    }
  }

  filterByEmptiness: string = "kegsToFill";

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }

  toggleEmpty(clickedKeg: Keg, setEmptiness: boolean) {
    clickedKeg.emptiness = setEmptiness;
  }
}
