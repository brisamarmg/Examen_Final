import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { DetalleEpisodioComponent } from './components/detalle-episodio/detalle-episodio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'personaje/:id', component: DetallePersonajeComponent },
  { path: 'episodio/:id', component: DetalleEpisodioComponent },
  { path: '**', redirectTo: 'login' }
];