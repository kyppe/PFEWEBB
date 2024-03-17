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
  tabCommandes!: any[];
  searchText: string = "";
  filteredCommandes!: any[];
  selectedOption: string = ""; // Property to hold the selected value from the <select> element
  SOCKET_SERVER_URL = "http://localhost:3000";
  checkList: boolean[] = [];
  selectedItems: any[] = [];
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
      this.checkList = Array(this.filteredCommandes.length).fill(false);
    });

    this.socket.on("allcommande", (data) => {
      console.log(data);
      this.tabCommandes = data;
      this.filteredCommandes = this.tabCommandes;
      this.checkList = Array(this.filteredCommandes.length).fill(false);
    });
  }

  filterCommandes() {
    this.filteredCommandes = this.tabCommandes.filter((com) => {
      return com.client.name.toLowerCase().includes(this.searchText.toLowerCase());
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

  change(index: number) {
    this.checkList[index] = !this.checkList[index];
    if (this.checkList[index]) {
      this.selectedItems.push(this.filteredCommandes[index]);
    } else {
      const selectedItemIndex = this.selectedItems.findIndex(item => item.id === this.filteredCommandes[index].id);
      if (selectedItemIndex !== -1) {
        this.selectedItems.splice(selectedItemIndex, 1);
      }
    }
  }

  save() {
    console.log("Selected Items:", this.selectedItems);
    console.log("Selected Option:", this.selectedOption); // Log the selected option
    // Here you can do whatever you want with the selected items and option
  }
}
