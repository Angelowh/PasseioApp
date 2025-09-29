import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {
  lugarForm: FormGroup
  categorias: Categoria[] =[]

  constructor(private categoriaService: CategoriaService,
              private service: LugarService
  ) {
    this.lugarForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
      this.categoriaService.obterTodos().subscribe(
        categorias => this.categorias = categorias 
      )
  }

  salvar(){
    this.service.salvar(this.lugarForm.value).subscribe({
      next: lugar => {
          console.log(lugar)
          this.lugarForm.reset()
      },
      error: err => console.log(err)
    })
  }
}
