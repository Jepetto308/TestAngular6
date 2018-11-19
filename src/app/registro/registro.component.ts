import { Component, OnInit } from '@angular/core';
import { RegistroPersonaService } from '../registro-persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public personaRegistro:any = { 
    nombres:'', 
    apellidos: '', 
    tipoDocumento: '',
    numeroDocumento: '',
    email: '',
    telefono: ''
  };

  constructor(public rest:RegistroPersonaService) { }

  addRegistro(){

    this.rest.addRegistro(this.personaRegistro).subscribe((result) => {
      console.log(result.code_response);
      if(result.code_response == "200"){
        this.personaRegistro = { 
          nombres:'', 
          apellidos: '', 
          tipoDocumento: '',
          numeroDocumento: '',
          email: '',
          telefono: ''
        };

        alert("Persona Registrada!")
      }
    });
  }

  ngOnInit() {
    document.getElementById("inciarSelect").click();
  }

}
