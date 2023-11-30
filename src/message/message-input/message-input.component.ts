import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'], 
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ]
})
export class MessageInputComponent {

  message = '';

  constructor(private messageService: MessageService) { }

  askSubmit() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }

  askClear() {
    this.messageService.clear();
  }

}