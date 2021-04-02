import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papel-if',
  templateUrl: './papel-if.page.html',
  styleUrls: ['./papel-if.page.scss'],
})
export class PapelIfPage implements OnInit {
  items: any;
  
  

  lista = [{nombre:"Kristel",apellido:"Montoya",url:"/mapa"},
          {nombre:"Saúl",apellido:"Vega",url:"/contacto"},
          {nombre:"Daniel",apellido:"Duran",url:"/horarios"},
          {nombre:"Carlos",apellido:"Vega",url:"/compa"},
          {nombre:"juan",apellido:"Vega",url:"/compa"},
    
          ];

  constructor() {
    this.initializeItems();
   }

  ngOnInit() {
  }
 
  initializeItems(){
    this.items = this.lista;

  }

  getItems(ev:any){
    this.initializeItems();

    let val= ev.target.value;

    if (val && val.trim() !=""){
      this.items = this.items.filter((item)=> {
        return(item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
  }

}
