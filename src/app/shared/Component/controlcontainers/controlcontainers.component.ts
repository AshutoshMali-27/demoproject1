import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-controlcontainers',
  templateUrl: './controlcontainers.component.html',
  styleUrl: './controlcontainers.component.css'
})
export class ControlcontainersComponent {

   
  @Input() label: string = '';  // Input property for label text
  @Input() type: string = '';  // Input property for label type
  @Input() color: string = '';  // Input property for label color
  @Input() fontSize: string = '';  // Input property for font size
  @Input() fontWeight: string = '';  // Input property for font weight
  @Input() tooltip: string = '';  // Input property for tooltip
  @Input() icon: string = '';  // Input property for icon
  @Input() disabled: boolean = false;  // Input property for disabled state
	

}
