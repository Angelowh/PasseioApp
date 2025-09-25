import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  categoriaForm: FormGroup;

  constructor() {
    this.categoriaForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  salvar(){
    console.log(this.categoriaForm.value);
    console.log('IsValid:' + this.categoriaForm.valid);
  }
}
