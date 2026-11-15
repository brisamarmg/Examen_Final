import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  todosLosEpisodios: any[] = [];
  episodio1: any = null;
  personajesEp1: any[] = [];

  episodio2: any = null;
  personajesEp2: any[] = [];

  selectedEp1Id = 1;
  selectedEp2Id = 2;

  constructor(private api: RickMortyService, private router: Router) {}

  ngOnInit(): void {
    // Cargar lista de episodios para el selector de nuevas opciones
    this.api.getEpisodios().subscribe((res) => {
      this.todosLosEpisodios = res.results;
    });

    this.cargarFilaEpisodio(this.selectedEp1Id, 1);
    this.cargarFilaEpisodio(this.selectedEp2Id, 2);
  }

  cargarFilaEpisodio(epId: number, fila: number) {
    this.api.getEpisodioById(epId).subscribe((ep) => {
      // Extraer los IDs de las URLs de personajes que trae el episodio
      const ids = ep.characters.map((url: string) => Number(url.split('/').pop()));

      this.api.getMultiplesPersonajes(ids).subscribe((chars) => {
        const listaPersonajes = Array.isArray(chars) ? chars : [chars];
        if (fila === 1) {
          this.episodio1 = ep;
          this.personajesEp1 = listaPersonajes;
        } else {
          this.episodio2 = ep;
          this.personajesEp2 = listaPersonajes;
        }
      });
    });
  }

  verPersonaje(id: number) {
    this.router.navigate(['/personaje', id]);
  }

  verEpisodio(id: number) {
    this.router.navigate(['/episodio', id]);
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    this.router.navigate(['/login']);
  }
}