import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Este es el archivo de rutas, el cual nos ayuda a manejar las rutas a las cuales navegamos en el proyecto.
// Recuerden que el path: 'nombreDeTuPagina' es el nombre con el que llamamos a nuestras paginas para navegar hacia ellas
const routes: Routes = [
  {
    // Recuerden que el path: 'nombreDeTuPagina' es el nombre con el que llamamos a nuestras paginas para navegar hacia ellas
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // Recuerden que el path: 'nombreDeTuPagina' es el nombre con el que llamamos a nuestras paginas para navegar hacia ellas
    path: 'samir-mendez',
    loadChildren: () => import('./samir-mendez/samir-mendez.module').then( m => m.SamirMendezPageModule)
  },
  {
    // Recuerden que el path: 'nombreDeTuPagina' es el nombre con el que llamamos a nuestras paginas para navegar hacia ellas
    path: 'mathews-mendez',
    loadChildren: () => import('./mathews-mendez/mathews-mendez.module').then( m => m.MathewsMendezPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
