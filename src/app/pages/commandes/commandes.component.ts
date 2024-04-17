import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Commande } from "app/models/commande";
import { CommandeService } from "app/services/commande.service";
import { io, Socket } from "socket.io-client";
import * as html2pdf from "html2pdf.js";

@Component({
  selector: "commandes-cmp",
  moduleId: module.id,
  templateUrl: "commandes.component.html",
})
export class CommandesComponent implements OnInit {
  tabCommandes!: any[];
  searchText: string = "Encours";
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

  change(index: number) {
    console.log(this.checkList);
    
    this.checkList[index] = !this.checkList[index];
    if (this.checkList[index]) {
      this.selectedItems.push(this.filteredCommandes[index]);
    } else {
      const selectedItemIndex = this.selectedItems.findIndex(
        (item) => item.id === this.filteredCommandes[index].id
      );
      if (selectedItemIndex !== -1) {
        this.selectedItems.splice(selectedItemIndex, 1);
      }
    }
  }

  save() {
    this.commandeService
      .updateEtateCommande(this.selectedItems, this.selectedOption)
      .subscribe((data) => {
        console.log(data);
        this.socket.emit("changeEtat", this.selectedItems);
        this.filteredCommandes = data;
        this.tabCommandes = data;
        this.selectedItems  = Array(this.filteredCommandes.length).fill(false)
      });
    console.log("Selected Items:", this.selectedItems);
    console.log("Selected Option:", this.selectedOption); // Log the selected option
    // Here you can do whatever you want with the selected items and option
  }
  generatePDF() {
    const element = document.getElementById("yourElementId"); // Replace 'yourElementId' with the ID of the element you want to convert to PDF
    html2pdf().from(element).save();
  }

  printReservation(commande: Commande) {
    console.log(commande);

    let x = "";
    for (let index = 0; index < commande.rows.length; index++) {
      x =
        x +
        "<tr><td>" +
        commande.rows[index].id +
        "</td><td>" +
        commande.rows[index].product.name +
        "</td><td>" +
        commande.rows[index].qte +
        "</td><td>" +
        commande.rows[index].price +
        "</td></tr>";
    }

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Commande Details</title>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body onload="window.print();">
            <h1>Commande Details</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${x}
              </tbody>
            </table>
            prix total : ${commande.total}
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  }
}
