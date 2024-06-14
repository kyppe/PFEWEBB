import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Maps } from "app/models/maps";
import { MapsService } from "app/services/maps.service";

@Component({
  selector: 'app-map-transaction',
  templateUrl: './map-transaction.component.html',
  styleUrls: ['./map-transaction.component.scss']
})
export class MapTransactionComponent implements OnInit {
notification:string=""
  formRegl!: FormGroup;
  selectedFileType: any;
  tablenumber = 0;
  listatt: string[] = [];
  checkBoxs: boolean[] = [];
  checkBoxsValues: boolean[] = [];
  listTables: string[] = ["produit", "transaction", "clinets"];
  testshow: boolean = false;
  files!: File;
  saveTest: boolean = false;
  savedProduct = false;
  savedTransaction = false;
  savedClinets = false;
  error = false;
  constructor(public fb: FormBuilder, public server: MapsService) {}
  dataTable: Maps;
  ngOnInit(): void {
    this.formRegl = this.fb.group({
      negatif: [""],
      positif: [""],
    });
    this.server.getAttribTransaction().subscribe((data) => {
      this.listatt = data;
    });
    this.server.getTableRef().subscribe((data) => {
      this.listgroupby = data;
      this.listatt.push("")
    });

  }

  tableHeaders: string[] = [];
  tableData: any[][] = [];
  listgroupby: string[] = [];
  listRow: any;
  listdata: any;
  selects: any;

  onFileSelected(event: any) {
    this.files = event.target.files[0];
    this.dataTable = null;

    const formData: FormData = new FormData();
    formData.append("file", this.files);

    this.server.convert(formData).subscribe((data) => {
      console.log(data);
      this.testshow = true;

      // Update dataTable with new data
      this.dataTable = data;
      this.error = false;

      this.notification = "Données importées avec succès !";

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
    (err) => {
      this.notification =
        "Il y a une erreur de structure dans le fichier" +
        err.error.error.message;
      this.error = true;
      console.log(this.notification);

      setTimeout(() => {
        this.notification = null;
      }, 2000);
      console.log("HTTP Error ===>", err.error.error);
    },);
  }

  save() {
    if(this.formRegl.value["negatif"]==""){
      this.error = true;
      this.notification = "la liste des types de règlement négatifs doit être non vide";

      setTimeout(() => {
        this.notification = "";
      }, 2000);
      return 0
    }
    if(this.formRegl.value["positif"]==""){
      this.error = true;
      this.notification = "la liste des types de règlement positifs doit être non vide";

      setTimeout(() => {
        this.notification = "";
      }, 2000);
      return 0
    }
    let l = [];
    let find = false;
    let find1 = false;
    for (let i = 0; i < this.selects.length; i++) {
      l.push({
        bdfield: this.selects[i],
        dynfield: this.dataTable.columns[i],
        primaryKey: this.checkBoxsValues[i],
      });
      if (this.selects[i].toLowerCase() == "id") {
        find = true;
      }
      if (this.selects[i].toLowerCase() == "typetra") {
        find1 = true;
      }
    }
    
    console.log(l);
    console.log(this.dataTable);
    if (find && find1) {
    this.server
      .addTransaction({ data: this.dataTable, map: l,positif:this.formRegl.value["positif"],negatif:this.formRegl.value["negatif"] })
      .subscribe((data) => {
        console.log(data);
        this.saveTest = true;
        this.notification = "Données enregistrées avec succès.";

        setTimeout(() => {
          this.notification = "";
        }, 2000); 
  
      });
    }
    else if (!find) {
      this.error = true;
      this.notification = "le champ 'id' est nécessaire";

      setTimeout(() => {
        this.notification = "";
      }, 2000);
    }
    else if (!find1) {
      this.error = true;
      this.notification = "le champ 'typeTra' est nécessaire";

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

    console.log(l);
    console.log(this.dataTable);
    this.server
      .updateTransaction({ data: this.dataTable, map: l })
      .subscribe((data) => {
        console.log(data);
        this.saveTest = true;
        this.notification = "Données enregistrées avec succès.";

        setTimeout(() => {
          this.notification = "";
        }, 2000); 
  
      
      });
  }
  nextPage() {
    this.tablenumber++;
  }
  togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
} 
togglePopup1() { 
  const overlay = document.getElementById('popupOverlay1'); 
  overlay.classList.toggle('show'); 
} 
}
