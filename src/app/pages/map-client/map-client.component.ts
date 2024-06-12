import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Maps } from "app/models/maps";
import { ClientService } from "app/services/client.service";
import { MapsService } from "app/services/maps.service";
import { ProduitService } from "app/services/produit.service";

@Component({
  selector: 'app-map-client',
  templateUrl: './map-client.component.html',
  styleUrls: ['./map-client.component.scss']
})
export class MapClientComponent implements OnInit {

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

  constructor(public fb: FormBuilder, public server: MapsService,public serviceclient:ClientService) {}
  dataTable: Maps;
  ngOnInit(): void {

    this.server.getTableRef().subscribe((data) => {
      this.listgroupby = data;
      console.log(this.listgroupby);
    });
    this.serviceclient.getAttributes().subscribe(data => {
      console.log(data);
      
      this.listatt =data
      this.listatt.push("")
    })
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
    });
  }

  save() {
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
      .addClient({ data: this.dataTable, map: l })
      .subscribe((data) => {
        console.log(data);
        this.saveTest = true;
      });
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
      .updateClient({ data: this.dataTable, map: l })
      .subscribe((data) => {
        console.log(data);
        this.saveTest = true;
      });
  }
  togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
} 
  nextPage() {
    this.tablenumber++;
  }
  togglePopup1() { 
    const overlay = document.getElementById('popupOverlay1'); 
    overlay.classList.toggle('show'); 
  } 
}
