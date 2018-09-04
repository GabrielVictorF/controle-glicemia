import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { FunctionsProvider } from '../providers/functions/functions';

import { AdicionarPage } from '../pages/adicionar/adicionar';
import { MedicoesPage } from '../pages/medicoes/medicoes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { EditaPage } from '../pages/edita/edita';

import { TurnoPipe } from '../pipes/turno/turno';
import { DataPipe } from '../pipes/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AdicionarPage,
    MedicoesPage,
    DetalhePage,
    EditaPage,
    TurnoPipe,
    DataPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AdicionarPage,
    MedicoesPage,
    DetalhePage,
    EditaPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    FunctionsProvider
  ]
})
export class AppModule {}
