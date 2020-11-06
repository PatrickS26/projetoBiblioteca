import { Injectable } from '@angular/core';
import {Livro} from './livro.model';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class LivroService {
  private livro: Livro[]=[];
  private listaLivroAtualizado = new Subject<Livro[]>();

  constructor(private httpClient: HttpClient){

  }


  getLivro():Livro[]{
    return[...this.livro];
  }
  adicionarLivro(titulo:string,paginas:number,autor:string,id:number) {
    const livro: Livro = {
      titulo:titulo,
      paginas:paginas,
      autor:autor,
      id:id
    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:3000/api/livro',livro).subscribe(

    (dados) => {
    console.log(dados.mensagem);
    this.livro.push(livro);
    this.listaLivroAtualizado.next([...this.livro]);
    }
    )
    this.livro.push(livro);
    this.listaLivroAtualizado.next([...this.livro]);
  }
  getlistaLivroAtualizadoObservable(){
    return this.listaLivroAtualizado.asObservable();
  }



}
