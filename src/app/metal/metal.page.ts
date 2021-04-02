import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.page.html',
  styleUrls: ['./metal.page.scss'],
})
export class MetalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irmetalif(){
    this.router.navigateByUrl("/metal-if")
  }

}
