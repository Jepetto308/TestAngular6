import { Component, OnInit } from '@angular/core';
import { ServiceStarwarsService } from '../service-starwars.service'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  peoples:any = [];
  onePeople:any = {
    name: "",
    height: "",
    mass: "",
    eye_color: "",
    gender: ""
  }

  constructor(public rest:ServiceStarwarsService) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples() {
    this.peoples = [];
    this.rest.getPeoples().subscribe((data: {}) => {
      console.log(data);
      this.peoples = data;
    });
  }

  getPeoplesById(idPeople) {
    this.onePeople = {};
    this.rest.getPeopleById(idPeople).subscribe((data: {}) => {
      console.log(data);
      this.onePeople = data;
    });
    
    document.getElementById("tablePersonajes").style.display = "none";
    document.getElementById("containerDetail").style.display = "block";
  }

  volver(){
    this.getPeoples();
    document.getElementById("containerDetail").style.display = "none";
    document.getElementById("tablePersonajes").style.display = "table";
  }


}
