import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vidrio',
  templateUrl: './vidrio.page.html',
  styleUrls: ['./vidrio.page.scss'],
})
export class VidrioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irvidrioif(){
    this.router.navigateByUrl("/vidrio-if")
  }

}
