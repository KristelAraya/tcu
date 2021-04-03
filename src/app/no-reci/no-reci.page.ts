import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-reci',
  templateUrl: './no-reci.page.html',
  styleUrls: ['./no-reci.page.scss'],
})
export class NoReciPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irnoreciif(){
    this.router.navigateByUrl("/no-reci-if")
  }

}
