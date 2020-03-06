import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  nombre: string;
  ape_paterno: string;
  ape_materno: string;
  selectedValue: string;
  email: string;
  email_extension: string;
  telefono: string;
  pregunta1: '';
  departamento: '';
  provincia: '';
  distrito: '';
  email_custom: boolean = true;
  captcha: '';

  constructor() {
  }
  ngOnInit(): void {
    
  }
  selectChange(value): void {
    console.log(value);
    console.log('test select');
    if (value == 'otros') {
      this.email_custom = false;
    }
  }

  afiliado: {}

  submitData() {
    this.afiliado = {
      nombre: this.nombre,
      ape_paterno: this.ape_paterno,
      ape_materno: this.ape_materno,
      
    }
    console.log(this.afiliado);
  }
}
