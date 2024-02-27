import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { ClientsComponent }            from '../../pages/clients/clients.component';
import { CommerciauxComponent }           from '../../pages/commerciaux/commerciaux.component';
import { CommandesComponent }           from '../../pages/commandes/commandes.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjoutClientComponent } from 'app/pages/ajout-client/ajout-client.component';
import { AjoutCommercialComponent } from 'app/pages/ajout-commercial/ajout-commercial.component';
import { AjoutCommandeComponent } from 'app/pages/ajout-commande/ajout-commande.component';
import { AjoutProduitComponent } from 'app/pages/ajout-produit/ajout-produit.component';
import { EditClientComponent } from 'app/pages/edit-client/edit-client.component';
import { EditCommandeComponent } from 'app/pages/edit-commande/edit-commande.component';
import { EditCommercialComponent } from 'app/pages/edit-commercial/edit-commercial.component';
import { ProduitComponent } from 'app/pages/produit/produit.component';
import { DetailCommandeComponent } from 'app/pages/detail-commande/detail-commande.component';
import { DetailClientComponent } from 'app/pages/detail-client/detail-client.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    ClientsComponent,
    CommerciauxComponent,
    CommandesComponent,
    ProduitComponent,
    AjoutClientComponent,
    AjoutCommercialComponent,
    AjoutCommandeComponent,
    AjoutProduitComponent,
    EditClientComponent,
    EditClientComponent,
    EditCommandeComponent,
    EditCommercialComponent,
    DetailCommandeComponent,
    DetailClientComponent

    

  ]
})

export class AdminLayoutModule {}
