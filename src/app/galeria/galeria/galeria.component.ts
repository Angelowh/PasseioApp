import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';
import { Categoria } from '../../categorias/categoria';
import { Lugar } from '../../lugares/lugar';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {
  categorias: Categoria[] = []
  lugares: Lugar[] = []
  localizacao: string = ''
  categoria: string = ''

  constructor(private categoriaService: CategoriaService,
              private lugarService: LugarService) { }

  ngOnInit(): void {
      this.categoriaService.obterTodos().subscribe(
        categorias => this.categorias = categorias
      )

      this.lugarService.obterTodos().subscribe(
        lugares => this.lugares = lugares
      )
  }

  getTotalEstrelas(lugar: Lugar) : string {
    return '★'.repeat(lugar.avaliacao || 0) + '☆'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    this.lugarService.filtrar(this.localizacao, this.categoria).subscribe(
      lugares => this.lugares = lugares
    )
  }
}
