import { Component, inject, Injector } from '@angular/core';
import { BaseComponent } from '../../../shared/Ui-Component/BaseComponent';

@Component({
  selector: 'app-sanctionorderentry',
  // standalone: true,
  // imports: [],
  templateUrl: './sanctionorderentry.component.html',
  styleUrl: './sanctionorderentry.component.css'
})
export class SanctionorderentryComponent extends BaseComponent {

  goBack(){
    
  }
  constructor(injector:Injector){
    super(injector);
  }

ngOnInit(): void {
  
}
  
dropdownOptions = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' }
];

handleOptionSelected(selectedId: any) {
  console.log('Selected option ID:', selectedId);
  // Additional logic based on selected ID
}
}
