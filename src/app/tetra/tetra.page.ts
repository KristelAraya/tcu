import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tetra',
  templateUrl: './tetra.page.html',
  styleUrls: ['./tetra.page.scss'],
})
export class TetraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irtetraif(){
    this.router.navigateByUrl("/tetra-if")
  }

}
