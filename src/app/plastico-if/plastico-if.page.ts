import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plastico-if',
  templateUrl: './plastico-if.page.html',
  styleUrls: ['./plastico-if.page.scss'],
})
export class PlasticoIfPage implements OnInit {
  items: any;
  
  

  lista = [{nombre:"Kristel",apellido:"Montoya",url:"/mapa"},
          {nombre:"Saúl",apellido:"Vega",url:"/contacto"},
          {nombre:"Mario",apellido:"Duran",url:"/horarios"},
          {nombre:"Pablo",apellido:"Vega",url:"/compa"},
          {nombre:"Pedro",apellido:"Vega",url:"/compa"},
          {nombre:"Karla",apellido:"Vega",url:"/compa"},
    
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

