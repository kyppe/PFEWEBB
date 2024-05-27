import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Maps } from "app/models/maps";
import { MapsService } from "app/services/maps.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit {
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

  constructor(
    public fb: FormBuilder,
    public server: MapsService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  nextPage() {
    this.tablenumber++;
    if (this.tablenumber > 4) {
      this.router.navigate(["/dashboard"]);
    }
  }
}
