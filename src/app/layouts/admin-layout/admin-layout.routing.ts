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
import { CrudMapComponent } from 'app/pages/crud-map/crud-map.component';
import { UpdateMapComponent } from 'app/pages/update-map/update-map.component';
import { MapProductComponent } from 'app/pages/map-product/map-product.component';
import { MapClientComponent } from 'app/pages/map-client/map-client.component';
import { MapAdressComponent } from 'app/pages/map-adress/map-adress.component';
import { MapTransactionComponent } from 'app/pages/map-transaction/map-transaction.component';
import { InstallationComponent } from 'app/pages/installation/installation.component';
import { AuthGuard } from 'app/auth.guard';
import { TypeTransactionComponent } from 'app/pages/type-transaction/type-transaction.component';
import { AjoutTypeTransactionComponent } from 'app/pages/ajout-type-transaction/ajout-type-transaction.component';
import { EditTypeTransactionComponent } from 'app/pages/edit-type-transaction/edit-type-transaction.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
    { path: 'commerciaux', component: CommerciauxComponent, canActivate: [AuthGuard] },
    { path: 'commandes', component: CommandesComponent, canActivate: [AuthGuard] },
    { path: 'produits', component: ProduitComponent, canActivate: [AuthGuard] },
    { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
    { path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard] },
    { path: 'ajoutProfile', component: AjoutProfileComponent, canActivate: [AuthGuard] },
    { path: 'ajoutCategorie', component: AjoutCategorieComponent, canActivate: [AuthGuard] },
    { path: 'ajoutCommercial', component: AjoutCommercialComponent, canActivate: [AuthGuard] },
    { path: 'ajoutCommande', component: AjoutCommandeComponent, canActivate: [AuthGuard] },
    { path: 'ajoutClient', component: AjoutClientComponent, canActivate: [AuthGuard] },
    { path: 'ajoutProduit', component: AjoutProduitComponent, canActivate: [AuthGuard] },
    { path: 'editProduit/:id', component: EditProduitComponent, canActivate: [AuthGuard] },
    { path: 'editCategorie/:intit', component: EditCategorieComponent, canActivate: [AuthGuard] },
    { path: 'editProfile/:intit', component: EditProfileComponent, canActivate: [AuthGuard] },
    { path: 'editClient/:id', component: EditClientComponent, canActivate: [AuthGuard] },
    { path: 'editCommercial/:id', component: EditCommercialComponent, canActivate: [AuthGuard] },
    { path: 'editCommande/:id', component: EditCommandeComponent, canActivate: [AuthGuard] },
    { path: 'detailCommande/:id', component: DetailCommandeComponent, canActivate: [AuthGuard] },
    { path: 'detailClient/:id', component: DetailClientComponent, canActivate: [AuthGuard] },
    { path: 'affecterClients/:id', component: AffecterClientsComponent, canActivate: [AuthGuard] },
    { path: 'affecterProduits/:id', component: AffecterProduitsComponent, canActivate: [AuthGuard] },
    { path: 'matchProfileCategories', component: MatchProfileCategorieComponent, canActivate: [AuthGuard] },
    { path: 'ajoutMatchProfileCategories', component: AddMatchProfileCategorieComponent, canActivate: [AuthGuard] },
    { path: 'addImageProduct', component: AddImageProductComponent, canActivate: [AuthGuard] },
    { path: 'crudMap', component: CrudMapComponent, canActivate: [AuthGuard] },
    { path: 'updateMap/:id', component: UpdateMapComponent, canActivate: [AuthGuard] },
    { path: 'produitMap', component: MapProductComponent, canActivate: [AuthGuard] },
    { path: 'clientMap', component: MapClientComponent, canActivate: [AuthGuard] },
    { path: 'adressMap', component: MapAdressComponent, canActivate: [AuthGuard] },
    { path: 'transactionMap', component: MapTransactionComponent, canActivate: [AuthGuard] },
    { path: 'installation', component: InstallationComponent, canActivate: [AuthGuard] },
    { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
    { path: 'typeTransaction', component: TypeTransactionComponent, canActivate: [AuthGuard] },
    { path: 'ajoutTypeTransaction', component: AjoutTypeTransactionComponent, canActivate: [AuthGuard] },
    { path: 'editTypeTransaction/:id', component: EditTypeTransactionComponent, canActivate: [AuthGuard] }


  ];
