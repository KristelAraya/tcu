import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tec',
  templateUrl: './tec.page.html',
  styleUrls: ['./tec.page.scss'],
})
export class TecPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irtecif(){
    this.router.navigateByUrl("/tec-if")
  }


}
