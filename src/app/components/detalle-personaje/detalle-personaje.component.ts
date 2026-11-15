import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-personaje.component.html',
  styleUrl: './detalle-personaje.component.css'
})
export class DetallePersonajeComponent implements OnInit {
  personaje: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: RickMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getPersonajeById(id).subscribe((data) => {
        this.personaje = data;
      });
    }
  }

  irAEpisodio(urlEpisodio: string) {
    const epId = urlEpisodio.split('/').pop();
    this.router.navigate(['/episodio', epId]);
  }

  volver() {
    this.router.navigate(['/catalogo']);
  }
}