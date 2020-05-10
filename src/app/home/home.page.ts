import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // En el constructor se declaran las variables, en este caso declare la variable router igual a Router para trabajar con la navegacion
  constructor(private router: Router) {}
  // Funcion para ir a Samir Mendez
  goToSamirMendez() {
    this.router.navigate(['/samir-mendez']);
  }
  // Funcion para ir a Samir Mendez
  // Funcion para ir a Mathews Mendez
  goToMathewsMendez() {
    this.router.navigate(['/mathews-mendez']);
  }
  // Funcion para ir a Mathews Mendez
}
