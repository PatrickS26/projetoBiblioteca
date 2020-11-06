import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { LivroInserirComponent } from './Livros/livro-inserir/livro-inserir.component';
import { LivroListaComponent } from './Livros/livro-lista/livro-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivroService } from './Livros/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroInserirComponent,
    LivroListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule


  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }


