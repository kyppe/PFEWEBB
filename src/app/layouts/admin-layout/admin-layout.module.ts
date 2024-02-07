import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { ClientsComponent }            from '../../pages/clients/clients.component';
import { CommerciauxComponent }           from '../../pages/commerciaux/commerciaux.component';
import { CommandesComponent }           from '../../pages/commandes/commandes.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjoutClientComponent } from 'app/pages/ajout-client/ajout-client.component';
import { AjoutCommercialComponent } from 'app/pages/ajout-commercial/ajout-commercial.component';
import { AjoutCommandeComponent } from 'app/pages/ajout-commande/ajout-commande.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ClientsComponent,
    CommerciauxComponent,
    CommandesComponent,
    AjoutClientComponent,
    AjoutCommercialComponent,
    AjoutCommandeComponent

  ]
})

export class AdminLayoutModule {}
