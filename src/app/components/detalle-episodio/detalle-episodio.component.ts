import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-detalle-episodio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-episodio.component.html',
  styleUrl: './detalle-episodio.component.css'
})
export class DetalleEpisodioComponent implements OnInit {
  episodio: any = null;
  personajes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: RickMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getEpisodioById(id).subscribe((ep) => {
        this.episodio = ep;
        const ids = ep.characters.map((u: string) => Number(u.split('/').pop()));
        this.api.getMultiplesPersonajes(ids).subscribe((chars) => {
          this.personajes = Array.isArray(chars) ? chars : [chars];
        });
      });
    }
  }

  verPersonaje(id: number) {
    this.router.navigate(['/personaje', id]);
  }

  volver() {
    this.router.navigate(['/catalogo']);
  }
}