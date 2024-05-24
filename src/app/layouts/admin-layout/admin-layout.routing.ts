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
import { DetailCommandeComponent } from 'app/pages/detail-commande/detail-commande.component';
import { DetailClientComponent } from 'app/pages/detail-client/detail-client.component';
import { ProduitComponent } from 'app/pages/produit/produit.component';
import { CategoriesComponent } from 'app/pages/categories/categories.component';
import { ProfilesComponent } from 'app/pages/profiles/profiles.component';
import { AjoutProfileComponent } from 'app/pages/ajout-profile/ajout-profile.component';
import { AjoutCategorieComponent } from 'app/pages/ajout-categorie/ajout-categorie.component';
import { EditCategorieComponent } from 'app/pages/edit-categorie/edit-categorie.component';
import { EditProfileComponent } from 'app/pages/edit-profile/edit-profile.component';
import { AffecterClientsComponent } from 'app/pages/affecter-clients/affecter-clients.component';
import { AffecterProduitsComponent } from 'app/pages/affecter-produits/affecter-produits.component';
import { AddMatchProfileCategorieComponent } from 'app/pages/add-match-profile-categorie/add-match-profile-categorie.component';
import { MatchProfileCategorieComponent } from 'app/pages/match-profile-categorie/match-profile-categorie.component';
import { MapsComponent } from 'app/pages/maps/maps.component';
import { AddImageProductComponent } from 'app/pages/add-image-product/add-image-product.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'commerciaux', component: CommerciauxComponent },
    { path: 'commandes', component: CommandesComponent },
    { path: 'produits', component: ProduitComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'ajoutProfile', component: AjoutProfileComponent },
    { path: 'ajoutCategorie', component: AjoutCategorieComponent },
    { path: 'ajoutCommercial', component: AjoutCommercialComponent },
    { path: 'ajoutCommande', component: AjoutCommandeComponent },
    { path: 'ajoutClient', component: AjoutClientComponent },
    { path: 'ajoutProduit', component: AjoutProduitComponent },
    { path: 'editProduit/:id', component: EditProduitComponent },
    { path: 'editCategorie/:intit', component: EditCategorieComponent },
    { path: 'editProfile/:intit', component: EditProfileComponent },
    { path: 'editClient/:id', component: EditClientComponent },
    { path: 'editCommercial/:id', component: EditCommercialComponent },
    { path: 'editCommande/:id', component: EditCommandeComponent },
    { path: 'detailCommande/:id', component: DetailCommandeComponent },
    { path: 'detailClient/:id', component: DetailClientComponent },
    { path: 'affecterClients/:id', component: AffecterClientsComponent },
    { path: 'affecterProduits/:id', component: AffecterProduitsComponent },
    { path: 'matchProfileCategories', component: MatchProfileCategorieComponent },
    { path: 'ajoutMatchProfileCategories', component: AddMatchProfileCategorieComponent },
    { path: 'addImageProduct', component: AddImageProductComponent },

    {path:"maps",component:MapsComponent}








];
