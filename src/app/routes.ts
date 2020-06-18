import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CupomListaComponent } from './home/cupom/cupom-lista/cupom-lista.component';
import { DepoimentoComponent } from './footer/depoimento/depoimento.component';
import { ContatoComponent } from './footer/contato/contato.component';
import { EquipeComponent } from './footer/equipe/equipe.component';
import { LocalizacaoComponent } from './footer/localizacao/localizacao.component';
import { PoliticaPrivacidadeComponent } from './footer/politica-privacidade/politica-privacidade.component';
import { RoteiroAnimalKigdomComponent } from './home/roteiro/roteiro-animal-kigdom/roteiro-animal-kigdom.component';
import { RoteiroEpcotComponent } from './home/roteiro/roteiro-epcot/roteiro-epcot.component';
import { RoteiroHollywoodStudiosComponent } from './home/roteiro/roteiro-hollywood-studios/roteiro-hollywood-studios.component';
import { RoteiroMagicKingdomComponent } from './home/roteiro/roteiro-magic-kingdom/roteiro-magic-kingdom.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'galeria', component: GaleriaComponent},
    { path: 'cupom', component: CupomListaComponent},
    { path: 'depoimento', component: DepoimentoComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'equipe', component: EquipeComponent},
    { path: 'localizacao', component: LocalizacaoComponent},
    { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent},
    { path: 'roteiro-animal-kingdom', component: RoteiroAnimalKigdomComponent},
    { path: 'roteiro-epcot', component: RoteiroEpcotComponent},
    { path: 'roteiro-hollywood-studios', component: RoteiroHollywoodStudiosComponent},
    { path: 'roteiro-magic-kingdom', component: RoteiroMagicKingdomComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
]