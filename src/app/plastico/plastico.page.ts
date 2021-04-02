import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plastico',
  templateUrl: './plastico.page.html',
  styleUrls: ['./plastico.page.scss'],
})
export class PlasticoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irplasticoif(){
    this.router.navigateByUrl("/plastico-if")
  }


}
