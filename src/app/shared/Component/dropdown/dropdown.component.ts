import { NgClass } from '@angular/common';
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { BaseComponent } from '../../Ui-Component/BaseComponent';

@Component({
  selector: 'app-dropdown',
  // standalone: true,
  // imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent  {
  @Input() dropdownWidth: number = null; // Set the width in pixels
  @Input() options: { id: any, label: string }[] = []; // Options with id and label
  @Input() buttonLabel: string = 'Select'; // Label for the dropdown button
  @Input() dropdownSize: 'sm' | 'md' | 'lg' = 'md'; // Dropdown size (small, medium, large)
  @Input() isDisabled: boolean = false; // Control whether dropdown is frozen
  @Output() optionSelected = new EventEmitter<any>(); // Emit the selected option ID

  // Emit selected option ID when an option is clicked, only if not disabled
  onSelectOption(id: any) {
    if (!this.isDisabled) {
      this.optionSelected.emit(id);
    }
  }



}
