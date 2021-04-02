import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papel',
  templateUrl: './papel.page.html',
  styleUrls: ['./papel.page.scss'],
})
export class PapelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irpapelif(){
    this.router.navigateByUrl("/papel-if")
  }

}
