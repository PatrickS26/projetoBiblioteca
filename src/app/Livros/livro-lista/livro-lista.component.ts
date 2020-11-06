import { Component, OnInit, Input,OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit,OnDestroy {
  @Input() livro: Livro[] = [];
   private livroSubscription: Subscription;

  constructor(public livroService: LivroService) {}

  ngOnInit(): void {
    this.livro = this.livroService.getLivro();
    this.livroSubscription = this.livroService
      .getlistaLivroAtualizadoObservable()
      .subscribe((livro: Livro[]) => {
        this.livro = livro;
      });
  }
  ngOnDestroy(): void {
    this.livroSubscription.unsubscribe();
    }
}
