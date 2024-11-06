import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-controlcontainers',
  templateUrl: './controlcontainers.component.html',
  styleUrl: './controlcontainers.component.css'
})
export class ControlcontainersComponent {

   
  @Input() label: string = '';         // Label text
  @Input() type: string = '';           // Type for additional customization
  @Input() color: string = '';          // Label color
  @Input() fontSize: string = '';       // Font size
  @Input() fontWeight: string = '';     // Font weight
  @Input() tooltip: string = '';        // Tooltip text
  @Input() icon: string = '';           // Icon class
  @Input() disabled: boolean = false;   // Disabled state
  @Input() position: 'top' | 'aside' = 'top';
	

}
