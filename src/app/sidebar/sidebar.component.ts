import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  { path: "/commandes", title: "Commandes", icon: "nc-tile-56", class: "" },
  { path: "/clients", title: "Clients", icon: "nc-single-02", class: "" },
  { path: "/commerciaux", title: "Commerciaux", icon: "nc-delivery-fast", class: "" },
  { path: "/produits", title: "Produits", icon: "nc-app", class: "" },
  { path: "/categories", title: "Categories", icon: "nc-tag-content", class: "" },
  { path: "/profiles", title: "Profiles", icon: "nc-badge", class: "" },
  { path: "/maps", title: "Importer des données", icon: "nc-cloud-upload-94", class: "" },
  { path: "/addImageProduct", title: "upload image", icon: "nc-album-2", class: "" },
  { path: "/crudMap", title: "Maps", icon: "nc-single-copy-04", class: "" },
  { path: "/matchProfileCategories", title: "Affecter remise", icon: "nc-vector", class: "" },
  { path: "/typeTransaction", title: "typeTransaction", icon: "", class: "" },
  { path: "/installation", title: "installation", icon: "nc-tv-2", class: "" },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
