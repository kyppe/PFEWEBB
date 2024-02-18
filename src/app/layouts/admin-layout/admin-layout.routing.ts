import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ClientsComponent } from '../../pages/clients/clients.component';
import { CommerciauxComponent } from '../../pages/commerciaux/commerciaux.component';
import { CommandesComponent } from '../../pages/commandes/commandes.component';
import { AjoutCommercialComponent } from 'app/pages/ajout-commercial/ajout-commercial.component';
import { AjoutCommandeComponent } from 'app/pages/ajout-commande/ajout-commande.component';
import { AjoutClientComponent } from 'app/pages/ajout-client/ajout-client.component';
import { AjoutProduitComponent } from 'app/pages/ajout-produit/ajout-produit.component';
import { EditProduitComponent } from 'app/pages/edit-produit/edit-produit.component';
import { EditClientComponent } from 'app/pages/edit-client/edit-client.component';
import { EditCommercialComponent } from 'app/pages/edit-commercial/edit-commercial.component';
import { EditCommandeComponent } from 'app/pages/edit-commande/edit-commande.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'commerciaux',    component: CommerciauxComponent },
    { path: 'commandes',      component: CommandesComponent },
    { path: 'ajoutCommercial',component: AjoutCommercialComponent },
    { path: 'ajoutCommande',  component: AjoutCommandeComponent },
    { path: 'ajoutClient',  component: AjoutClientComponent },
    { path: 'ajoutProduit',  component: AjoutProduitComponent },
    { path: 'editProduit/:id',           component: EditProduitComponent },
    { path: 'editClient/:id',           component: EditClientComponent },
    { path: 'editCommercial/:id',           component: EditCommercialComponent },
    { path: 'editCommande/:id',           component: EditCommandeComponent },


    

];
