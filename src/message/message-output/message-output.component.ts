import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-output',
  templateUrl: './message-output.component.html',
  styleUrls: ['./message-output.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MessageOutputComponent implements OnInit {

  constructor(public messageService: MessageService) { }

}