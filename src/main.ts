import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MessageInputComponent } from './message/message-input/message-input.component';
import { MessageOutputComponent } from './message/message-output/message-output.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MessageInputComponent, MessageOutputComponent],
  template: `
    <p><strong>Exercice :</strong> remplacer par un BehaviorSubject pour corriger le bug du clear. Libre d'utiliser Imperative ou Reactive programming.</p>
    <app-message-output></app-message-output>
    <app-message-input></app-message-input>
  `,
})
export class App {
}

bootstrapApplication(App);
