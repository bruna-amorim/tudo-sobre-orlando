import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { appRoutes } from './routes';
import { CupomListaComponent } from './home/cupom/cupom-lista/cupom-lista.component';
import { CupomAnuncioComponent } from './home/cupom/cupom-anuncio/cupom-anuncio.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './footer/contato/contato.component';
import { DepoimentoComponent } from './footer/depoimento/depoimento.component';
import { EquipeComponent } from './footer/equipe/equipe.component';
import { LocalizacaoComponent } from './footer/localizacao/localizacao.component';
import { PoliticaPrivacidadeComponent } from './footer/politica-privacidade/politica-privacidade.component';
import { AlertifyService } from './_services/alertify.service';
import { TemperaturaService } from './_services/temperatura.service';
import { RoteiroAnimalKigdomComponent } from './home/roteiro/roteiro-animal-kigdom/roteiro-animal-kigdom.component';
import { RoteiroMagicKingdomComponent } from './home/roteiro/roteiro-magic-kingdom/roteiro-magic-kingdom.component';
import { RoteiroHollywoodStudiosComponent } from './home/roteiro/roteiro-hollywood-studios/roteiro-hollywood-studios.component';
import { RoteiroEpcotComponent } from './home/roteiro/roteiro-epcot/roteiro-epcot.component';
import { RoteiroCardComponent } from './home/roteiro/roteiro-card/roteiro-card.component';
import { RoteiroCarrouselComponent } from './home/roteiro/roteiro-carrousel/roteiro-carrousel.component';
import { EquipeCardComponent } from './footer/equipe/equipe-card/equipe-card.component';
import { CupomCardComponent } from './home/cupom/cupom-card/cupom-card.component';
import { ListaDepoimentoComponent } from './home/lista-depoimento/lista-depoimento.component';
import { TemperaturaComponent } from './nav/temperatura/temperatura.component';
import { DolarComponent } from './nav/dolar/dolar.component';
import { HorarioParqueComponent } from './nav/horario-parque/horario-parque.component';
import { LotacaoComponent } from './nav/lotacao/lotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GaleriaComponent,
    CupomListaComponent,
    CupomAnuncioComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    DepoimentoComponent,
    EquipeComponent,
    LocalizacaoComponent,
    PoliticaPrivacidadeComponent,
    RoteiroAnimalKigdomComponent,
    RoteiroMagicKingdomComponent,
    RoteiroHollywoodStudiosComponent,
    RoteiroEpcotComponent,
    RoteiroCardComponent,
    RoteiroCarrouselComponent,
    EquipeCardComponent,
    CupomCardComponent,
    ListaDepoimentoComponent,
    TemperaturaComponent,
    DolarComponent,
    HorarioParqueComponent,
    LotacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule,
    CollapseModule,
    ModalModule.forRoot(),
    TabsModule,
    ButtonsModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [AlertifyService, TemperaturaService, BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
