import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {

  router = inject(Router);
  onLogOff(){
    this.router.navigateByUrl('/login');
    localStorage.removeItem('empErpUser');

  }
}
