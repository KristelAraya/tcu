import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  items: any;
  
  

  lista = [{nombre:"Kristel",apellido:"Montoya",url:"/mapa"},
          {nombre:"Saúl",apellido:"Vega",url:"/contacto"},
          {nombre:"Mario",apellido:"Duran",url:"/horarios"},
          {nombre:"Pablo",apellido:"Vega",url:"/compa"},
          {nombre:"Pedro",apellido:"Vega",url:"/compa"},
    
          ];

  constructor(private router: Router) {
    this.initializeItems();
   }

  ngOnInit() {
  }
  irplastico(){
    this.router.navigateByUrl("/plastico")
  }
  irpapel(){
    this.router.navigateByUrl("/papel")
  }
  irmetal(){
    this.router.navigateByUrl("/metal")
  }
  irvidrio(){
    this.router.navigateByUrl("/vidrio")
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