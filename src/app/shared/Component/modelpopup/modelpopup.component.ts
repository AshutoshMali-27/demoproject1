import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modelpopup',
  // standalone: true,
  // imports: [],
  templateUrl: './modelpopup.component.html',
  styleUrl: './modelpopup.component.css'
})
export class ModelpopupComponent {

   // Controls the visibility of the modal
   @Input() isVisible = false;

   // Inputs for header and content, making the modal customizable
   @Input() header: string = 'Modal Header';
   @Input() content: string = 'This is the modal content.';
 
   // Event emitters for actions
   @Output() close = new EventEmitter<void>();
   @Output() confirm = new EventEmitter<void>();
 
   onClose() {
     this.close.emit();
   }
 
   onConfirm() {
     this.confirm.emit();
   }
}
