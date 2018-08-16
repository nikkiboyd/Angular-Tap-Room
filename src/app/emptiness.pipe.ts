import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {

  transform(input: Keg[], desiredEmptiness) {
    let output: Keg[] = [];
    if(desiredEmptiness === "reserved") {
      for (var i=0; i < input.length; i++) {
        if (input[i].emptiness === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "kegsToFill") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining <= 50) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "fullKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pintsRemaining >= 51) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
