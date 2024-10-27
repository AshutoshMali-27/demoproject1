import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-savebtn',
  templateUrl: './savebtn.component.html',
  styleUrl: './savebtn.component.css'
})
export class SavebtnComponent {

 
 // @Input() id: string; 
  @Input() label: string = 'Save';
  @Input() disabled: boolean = false;
  @Input() buttonClass: string = 'btn btn-primary';
  @Input() backgroundColor: string = '#4CAF50';
  @Input() color: string = '#fff';
  @Input() icon: string = 'fa-save';

  @Output() saveClicked = new EventEmitter<void>();

  onClick(): void {
    debugger;
    if (!this.disabled) {
      this.saveClicked.emit();
    }
  }
}
