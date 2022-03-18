import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  mensajeDefault:string = "Escribe aquí tu mensaje";

  constructor() { }

  ngOnInit(): void {
  }

  showSuccess() {
    alert("He recibido su mensaje, le responderé a la mayor brevedad posible\nGracias");
  }

}
