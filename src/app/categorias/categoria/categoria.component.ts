import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  categoriaForm: FormGroup;

  constructor(private service: CategoriaService) {
    this.categoriaForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  salvar(){
    this.categoriaForm.markAllAsTouched();
    
    if (this.categoriaForm.valid) {
      this.service.salvar(this.categoriaForm.value).subscribe({
        next: (categoria) => {
          console.log('Categoria salva com sucesso:', categoria);
          this.categoriaForm.reset();
        },
        error: (error) => {
          console.error('Erro ao salvar categoria:', error);
        }
      });
    }
  }

  isCampoInvalido(campo: string): boolean {
    const controle = this.categoriaForm.get(campo);
    return controle ? controle.invalid && (controle.dirty || controle.touched) : false;
  }
}
