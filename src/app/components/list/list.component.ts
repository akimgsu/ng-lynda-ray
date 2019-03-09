import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(theApt: object) {
    console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
  handleUpdate(theApt: object, labelName: string, newValue: string) {
    console.log('theApt:', theApt, 'labelName:', labelName, 'newValue:', newValue);
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue
    });
  }

}
