import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Maps } from "app/models/maps";
import { AdresseService } from "app/services/adresse.service";
import { ClientService } from "app/services/client.service";
import { MapsService } from "app/services/maps.service";
import { ProduitService } from "app/services/produit.service";
@Component({
  selector: "app-map-adress",
  templateUrl: "./map-adress.component.html",
  styleUrls: ["./map-adress.component.scss"],
})
export class MapAdressComponent implements OnInit {
  fromLogin!: FormGroup;
  selectedFileType: any;
  tablenumber = 0;
  listatt: String[] = [];
  checkBoxs: boolean[] = [];
  checkBoxsValues: boolean[] = [];
  listTables: string[] = ["produit", "transaction", "clinets"];
  testshow: boolean = false;
  files!: File;
  saveTest: boolean = false;
  savedProduct = false;
  savedTransaction = false;
  savedClinets = false;
  notification: string = "";

  constructor(
    public fb: FormBuilder,
    public server: MapsService,
    public serviceadress: AdresseService
  ) {}
  dataTable: Maps;
  ngOnInit(): void {
    this.server.getTableRef().subscribe((data) => {
      this.listgroupby = data;
      console.log(this.listgroupby);
    });
    this.serviceadress.getAttributes().subscribe((data) => {
      console.log(data);

      this.listatt = data;
      this.listatt.push("");
    });
  }

  tableHeaders: string[] = [];
  tableData: any[][] = [];
  listgroupby: string[] = [];
  listRow: any;
  listdata: any;
  selects: any;
  error = false;

  onFileSelected(event: any) {
    this.notification = "";

    this.files = event.target.files[0];
    this.dataTable = null;
    const formData: FormData = new FormData();
    formData.append("file", this.files);

    this.server.convert(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.testshow = true;
        this.notification = "Données importées avec succès !";
        this.error = false;
        // Update dataTable with new data
        this.dataTable = data;

        // Initialize selects, checkBoxs, and checkBoxsValues arrays
        this.selects = Array.from(
          { length: this.dataTable.columns.length },
          () => ""
        );
        this.checkBoxs = Array.from(
          { length: this.dataTable.columns.length },
          () => false
        );
        this.checkBoxsValues = Array.from(
          { length: this.dataTable.columns.length },
          () => false
        );

        // Check for foreign keys and update checkBoxs accordingly
        for (let index = 0; index < this.dataTable.columns.length; index++) {
          for (
            let index1 = 0;
            index1 < this.dataTable.foreignKeys.length;
            index1++
          ) {
            if (
              this.dataTable.foreignKeys[index1].fieldMain ==
              this.dataTable.columns[index]
            ) {
              this.checkBoxs[index] = true;
            }
          }
        }
        setTimeout(() => {
          this.notification = null;
        }, 2000);
      },
      error: (err) => {
        this.notification =
          "Il y a une erreur de structure dans le fichier" +
          err.error.error.message;
        this.error = true;
        console.log(this.notification);

        setTimeout(() => {
          this.notification = null;
        }, 2000);
        console.log("HTTP Error ===>", err.error.error);
      },
    });
  }

  save() {
    let find = true;
    let l = [];
    for (let i = 0; i < this.selects.length; i++) {
      l.push({
        bdfield: this.selects[i],
        dynfield: this.dataTable.columns[i],
        primaryKey: this.checkBoxsValues[i],
      });
      if (this.selects[i].toLowerCase() == "id") {
        find = true;
      }
    }
    if (find) {
      this.error = false;
      console.log("mawjouda ");
      console.log(l);
      console.log(this.dataTable);
      this.server
        .addAdress({ data: this.dataTable, map: l })
        .subscribe((data) => {
          console.log(data);
          this.saveTest = true;
          this.notification = "Données enregistrées avec succès.";

          setTimeout(() => {
            this.notification = "";
          }, 2000);
        
       
        },
      err=> {
        this.error = true;
        this.notification = "duplication du champ 'id'";

        setTimeout(() => {
          this.notification = "";
        }, 2000);
      }
      );
    } else {
      this.error = true;
      this.notification = "le champ 'id' est nécessaire";
      
      setTimeout(() => {
        this.notification = "";
      }, 2000);
    }
  }
  nextFile() {
    let l = [];
    for (let i = 0; i < this.selects.length; i++) {
      l.push({
        bdfield: this.selects[i],
        dynfield: this.dataTable.columns[i],
        primaryKey: this.checkBoxsValues[i],
      });
    }
    try {
      console.log(l);
      console.log(this.dataTable);
      this.server
        .updateAdress({ data: this.dataTable, map: l })
        .subscribe((data) => {
          console.log(data);
          this.error = false ;
          this.saveTest = true;
          this.notification = "Données enregistrées avec succès.";
          setTimeout(() => {
            this.notification = "";
          }, 2000);
        });
    } catch (error) {
      this.error = true ;
      this.notification = "une erreur s'est produite";
      setTimeout(() => {
        this.notification = "";
      }, 2000);
    
      console.log("===>" + error);
    }
  }
  togglePopup() {
    const overlay = document.getElementById("popupOverlay");
    overlay.classList.toggle("show");
  }
  nextPage() {
    this.tablenumber++;
  }
  togglePopup1() {
    const overlay = document.getElementById("popupOverlay1");
    overlay.classList.toggle("show");
  }
}
