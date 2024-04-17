import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Maps } from "app/models/maps";
import { MapsService } from "app/services/maps.service";

@Component({
  selector: 'app-map-product',
  templateUrl: './map-product.component.html',
  styleUrls: ['./map-product.component.scss']
})
export class MapProductComponent implements OnInit {

  fromLogin!: FormGroup;
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

  constructor(public fb: FormBuilder, public server: MapsService) {}
  dataTable: Maps;
  ngOnInit(): void {
    this.fromLogin = this.fb.group({
      login: [""],
      password: [""],
    });
    this.server.getAttribProduct().subscribe((data) => {
      this.listatt = data;
    });
    this.server.getTableRef().subscribe((data) => {
      this.listgroupby = data;
      console.log(this.listgroupby);
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
      .addProduct({ data: this.dataTable, map: l })
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
      .updateProduct({ data: this.dataTable, map: l })
      .subscribe((data) => {
        console.log(data);
        this.saveTest = true;
      });
  }

  nextPage() {
    this.tablenumber++;
  }
}
