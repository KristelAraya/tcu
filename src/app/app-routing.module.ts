import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'compa',
    loadChildren: () => import('./compa/compa.module').then( m => m.CompaPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'horarios',
    loadChildren: () => import('./horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'metal',
    loadChildren: () => import('./metal/metal.module').then( m => m.MetalPageModule)
  },
  {
    path: 'metal-if',
    loadChildren: () => import('./metal-if/metal-if.module').then( m => m.MetalIfPageModule)
  },
  {
    path: 'papel',
    loadChildren: () => import('./papel/papel.module').then( m => m.PapelPageModule)
  },
  {
    path: 'papel-if',
    loadChildren: () => import('./papel-if/papel-if.module').then( m => m.PapelIfPageModule)
  },
  {
    path: 'plastico',
    loadChildren: () => import('./plastico/plastico.module').then( m => m.PlasticoPageModule)
  },
  {
    path: 'plastico-if',
    loadChildren: () => import('./plastico-if/plastico-if.module').then( m => m.PlasticoIfPageModule)
  },
  {
    path: 'vidrio',
    loadChildren: () => import('./vidrio/vidrio.module').then( m => m.VidrioPageModule)
  },
  {
    path: 'vidrio-if',
    loadChildren: () => import('./vidrio-if/vidrio-if.module').then( m => m.VidrioIfPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
