import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';
@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {
  @Output() livroAdicionado = new EventEmitter<Livro>();
  titulo: string;
  autor: string;
  paginas: number;
  id: number;
  num = 0;
  onAdicionarLivro() {
    this.num++;
    const livro: Livro = {
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,
      id: this.id = this.num,
    };
    this.livroAdicionado.emit(livro);
  }
}
