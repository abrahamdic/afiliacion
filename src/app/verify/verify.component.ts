import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  personaTipoValue: string;
  dni: string;
  ruc: string;
  tipoVia: string;
  nombre_via: string;
  interior: string;
  numero: string;
  lote: string;
  manzana: string;
  kilometro: string;
  departamento: string;
  provincia: string;
  distrito: string;
  checked: boolean = false;
  razon_social: string;
  denominacion: string;
  ciiu: string;
  anios_mercado: string;
  regimenTributario: string;
  poderes: string;
  cargos: string;
  dni_ejecutivo: string;
  showInfoRuc: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  registrarRuc() {
    this.showInfoRuc = true;
  }

  guardar() {

  }

  enviar() {

  }
}
