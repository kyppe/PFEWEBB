import { Component, OnInit } from "@angular/core";
import { Commande } from "app/models/commande";
import { ClientService } from "app/services/client.service";
import { CommandeService } from "app/services/commande.service";
import Chart from "chart.js";

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  listDate: String[] = [];
  listNb: number[] = [];
  commandeNon: Commande[] = [];
  commandeEnCou: Commande[] = [];
  commandeLiv: Commande[] = [];
  commandeTem: Commande[] = [];
  constructor(public servce: CommandeService,public servceClient : ClientService) {}
  ngOnInit() {
    this.chartColor = "#FFFFFF";

    this.servce.getAll().subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
        if (data[index].etat.toLocaleLowerCase() == "non examiné") {
          this.commandeNon.push(data[index]);
        } else if (data[index].etat.toLocaleLowerCase() == "encours") {
          this.commandeEnCou.push(data[index]);
        } else if (data[index].etat.toLocaleLowerCase() == "prêt") {
          this.commandeLiv.push(data[index]);
        } else if (data[index].etat.toLocaleLowerCase() == "livraison") {
          this.commandeTem.push(data[index]);
        }
      }
    });
    this.servce.groupBy().subscribe((data) => {
      data.forEach((e) => {
        this.listDate.push(e.date);
        this.listNb.push(e.nb);
      });
      console.log(this.listDate);
      console.log(this.listNb);

      var speedCanvas = document.getElementById("speedChart");

      var dataSecond = {
        data: this.listNb,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var speedData = {
        labels: this.listDate,
        datasets: [dataSecond],
      };

      var chartOptions = {
        legend: {
          display: false,
          position: "top",
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true, // Ensure the y-axis starts at 0
              callback: function(value) { // Format the tick labels
                return Number.isInteger(value) ? value : null; // Only show integer values
              }
            }
          }]
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: "line",
        hover: false,
        data: speedData,
        options: chartOptions,
      });
    });
  }

}
