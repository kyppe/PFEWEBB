import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Commande } from "app/models/commande";
import { CommandeService } from "app/services/commande.service";
import { io, Socket } from "socket.io-client";
import * as html2pdf from "html2pdf.js";
import { MatchProfileCategorieService } from "app/services/match-profile-categorie.service";
import { MatchProfileCategorie } from "app/models/match-profile-categorie";

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
  tabMatch!: MatchProfileCategorie[];

  etats: string[] = ['non examiné', 'Encours', 'prêt', 'livraison'];


  constructor(
    public commandeService: CommandeService,
    private router: Router,
    public matchProfCatService: MatchProfileCategorieService
  ) { }

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

    this.matchProfCatService.getAll().subscribe(data => {
      this.tabMatch = data;
    })

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




  saveEtat(com:any) {
    // this.commandeService
    //   .updateEtateCommande(this.selectedItems, this.selectedOption)
    //   .subscribe((data) => {
    //     this.socket.emit("changeEtat", this.selectedItems);
       
    //   });
   console.log("new sh");
   com.editMode = false;
   
  }
  generatePDF() {
    const element = document.getElementById("yourElementId"); // Replace 'yourElementId' with the ID of the element you want to convert to PDF
    html2pdf().from(element).save();
  }

  printReservation(commande: Commande) {


    this.tabMatch = this.tabMatch.filter(e => e.profile.id == commande.client.profile.id)

    let x = "";
    let totalHT=0;
    for (let index = 0; index < commande.rows.length; index++) {

      console.log(commande.rows[index].product.categorie);

      let aux = this.tabMatch.filter(e => e.categorie.id == commande.rows[index].product.categorie.id)[0]
      totalHT+=  commande.rows[index].price  ;

      x =
        x +
        "<tr><td>" +
        commande.rows[index].product.ref +
        "</td><td>" +
        commande.rows[index].product.name +
        "</td><td>" +
        commande.rows[index].qte +
        "</td><td>" +
        commande.rows[index].product.price +
        "</td><td>" +
        ((aux && aux.remise !== undefined && aux.remise !== null) ? aux.remise + "%" : "0%")+
        "</td><td>" +
        commande.rows[index].price  +
        "</td><td>" +
        commande.rows[index].product.tva +
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
              .container {
                border: 1px solid #ddd; 
                padding: 20px; 
                display: flex; 
              }
              .company-info {
                margin-left: 20px; 
              }

            </style>
          </head>
          <body onload="window.print();">
          <div class="container">
    <img src="../../assets/img/logoTopTrading.png" alt="Company Logo" width="200px">  
    <div class="company-info">
      <h1>Top Trading</h1>
      <p>Capital: 300 000 DT-RC: B0186722008 Code TVA: 1077101F/A/M/000- </p>
      <p>Siège social: Rue Imam Rassaa App 20 Belvedere 1002 Tunis-Tunisie</p>
      <p>Tel: +216 71 651444/71 651555 Fax +216 71 650144</p>
    </div>

  
  </div>
<br>
  <div >
    <h2>Client</h2>  <div >
      <p><b>Désignation:</b>${commande.client.name}</p>
      <p><b>Téléphone:</b> ${commande.client.phone}</p>
      <p><b>Email:</b> ${commande.client.email}</p>
    </div>

  </div>
            <h1>BON DE COMMANDE 
            </h1>
            <table>
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Désignation</th>
                  <th>Quantité</th>
                  <th>P.U.H.TVA</th>
                  <th>Remise</th>      
                  <th>Montant HT</th>
                  <th>TVA</th>
                </tr>
              </thead>
              <tbody>
                ${x}
              </tbody>
            </table>
            <br>
            <br>
            <hr>
            <br>
            <br>
            <table>
            <tr>
            <th>Total HT</th>
            <th>Total TTC</th>
            <th>NET A PAYER</th>
            </tr>

            <tr>
            <td>${totalHT}</td>
            <td>${commande.total}</td>
            <td>${commande.total}</td>

            </tr>
          

            </table>
           
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  }
}
