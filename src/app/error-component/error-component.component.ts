import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent {
  @Input ()message!:string
  @Output () close= new EventEmitter<void>()

  onClose(){
    this.close.emit()
  }
}
