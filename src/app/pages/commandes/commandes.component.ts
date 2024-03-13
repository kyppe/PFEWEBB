import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Commande } from "app/models/commande";
import { CommandeService } from "app/services/commande.service";
import { io, Socket } from "socket.io-client";

@Component({
  selector: "commandes-cmp",
  moduleId: module.id,
  templateUrl: "commandes.component.html",
})
export class CommandesComponent implements OnInit {
  tabCommandes!: Commande[];
  searchText: string = "";
  filteredCommandes!: Commande[];
  SOCKET_SERVER_URL = "http://localhost:3000";
  private socket: Socket;

  constructor(
    public commandeService: CommandeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.socket = io(this.SOCKET_SERVER_URL, { transports: ["websocket"] });

    this.commandeService.getAll().subscribe((data) => {
      this.tabCommandes = data;
      this.filteredCommandes = this.tabCommandes;
    });

    this.socket.on("allcommande", (data) => {
        console.log(data);
        this.tabCommandes=data
        this.filteredCommandes = this.tabCommandes;

      // Update the commandes when a new command is received

    });
  }

  filterCommandes() {
    this.filteredCommandes = this.tabCommandes.filter((com) => {
      return com.client.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
    });
  }

  toDetailPage(id: number) {
    this.router.navigate(["/detailCommande", id]);
  }

  updateCommande(id: number) {
    this.router.navigate(["/editCommande", id]);
  }

  deleteCommande(id: number) {
    this.commandeService.deleteCommande(id).subscribe((data) => {
      this.filteredCommandes = this.filteredCommandes.filter((e) => e.id != id);
    });
  }
}
