import { Component } from '@angular/core';

import {LivroService} from '../livro.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {
  constructor(public livroService: LivroService ){}


  onAdicionarLivro(form:NgForm) {
    if (form.invalid) {
      return;
    }
    this.livroService.adicionarLivro(
      form.value.titulo,
      form.value.paginas,
      form.value.autor,
      form.value.id
    );
    form.resetForm();


  }


}

