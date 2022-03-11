import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemDeleteComponent } from './delete/postagens-delete/postagem-delete.component';
import { TemasDeleteComponent } from './delete/temas-delete/temas-delete.component';
import { PostagensEditComponent } from './edit/postagens-edit/postagens-edit.component';
import { TemasEditComponent } from './edit/temas-edit/temas-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { PostagensComponent } from './postagens/postagens.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    SobreNosComponent,
    InicioComponent,
    ContatoComponent,
    TemaComponent,
    PostagemDeleteComponent,
    TemasDeleteComponent,
    PostagensEditComponent,
    TemasEditComponent,
    UsuarioEditComponent,
    PostagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
