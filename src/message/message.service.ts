import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly _message$ = new ReplaySubject(5);
  private readonly message$ = this._message$.asObservable();

  messages: string[] = ['Bonjour !'];
  // Adapter ici : créer messages$

  sendMessage(message: string) {
    this.messages.next(message);
    // Adapter ici : pousser les données dans messages$
  }

  clear() {
    // NB : pourrait être solutionné en vidant le tableau sans changer sa référence mais ce n'est pas le sujet !
    // Adapter ici : pousser un tableau vide dans le subject
    // this.messages = [];
    // console.log(this.messages);
    // console.log('all message clear !');
    console.warn('Can not clear...');
  }
}
