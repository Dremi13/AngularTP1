import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from "../models/message"

@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

  public texte: string;
  public auteur: string;
  public errorsForm: any;
    
  @Output() nouveauMessage: EventEmitter<Message>;
  constructor() {
    this.nouveauMessage = new EventEmitter<Message>();
  }
  
  ngOnInit() {
    this.texte = '';
    this.auteur = '';
    this.errorsForm = {};
    this.errorsForm.required = new Array<String>();
  }

  public envoyer(): void {

    this.errorsForm.required = new Array<String>();

    if(this.texte == '')  this.errorsForm.required.push("Texte")
    if(this.auteur == '') this.errorsForm.required.push("Auteur")

    if(this.errorsForm.required.length > 0){
      return
    } 

    const message = new Message();
    message.auteur = this.auteur;
    message.date = new Date();
    message.texte = this.texte;

    this.nouveauMessage.emit(message);

    this.texte = '';
    this.auteur = '';
  }

}
