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
  { path: "/commerciaux", title: "Commerciaux", icon: "nc-badge", class: "" },
  { path: "/produits", title: "Produits", icon: "nc-badge", class: "" },
  { path: "/categories", title: "Categories", icon: "nc-badge", class: "" },
  { path: "/profiles", title: "Profiles", icon: "nc-badge", class: "" },
  { path: "/maps", title: "maps", icon: "nc-single-copy-04", class: "" },

  {
    path: "/matchProfileCategories",
    title: "matchProfileCategories",
    icon: "nc-badge",
    class: "",
  },
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
