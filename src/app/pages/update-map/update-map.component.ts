import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "app/models/client";
import { Mapper } from "app/models/mapper";
import { AdresseService } from "app/services/adresse.service";
import { ClientService } from "app/services/client.service";
import { MapsService } from "app/services/maps.service";

@Component({
  selector: "app-update-map",
  templateUrl: "./update-map.component.html",
  styleUrls: ["./update-map.component.scss"],
})
export class UpdateMapComponent implements OnInit {
  id: string;
  aux!: Mapper;
  listattadress: String[] = [];
  listattClient: String[] = [];
  listattProduct: String[] = [];
  listattTransaction: String[] = [];
  listAtt: String[] = [];
  clientForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: MapsService,
    public serviceadress: AdresseService,
    public serviceclient: ClientService,
    public server: MapsService
  ) {
    this.clientForm = this.fb.group({
      bdfield: ["", [Validators.required, Validators.required]],
      dynfield: ["", [Validators.required]],
      dynTableName: ["", [Validators.required]],
      bdTableName: ["", [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.serviceadress.getAttributes().subscribe((data) => {
      console.log(data);

      this.listattadress = data;

      this.serviceclient.getAttributes().subscribe((data) => {
        console.log(data);

        this.listattClient = data;

        this.server.getAttribProduct().subscribe((data) => {
          this.listattProduct = data;
          console.log(data);

          this.server.getAttribTransaction().subscribe((data) => {
            this.listattTransaction = data;
            console.log(data);

            this.activatedRoute.params.subscribe((params) => {
              this.id = params["id"]; // + convertit l id en string
              this.service.getbyId(this.id).subscribe((data) => {
                this.aux = data;
                console.log(this.aux.bdTableName);
                this.clientForm.get("dynfield").setValue(this.aux.dynfield);

                this.clientForm
                  .get("dynTableName")
                  .setValue(this.aux.dynTableName);
                this.clientForm
                  .get("bdTableName")
                  .setValue(this.aux.bdTableName);
                if (this.aux.bdTableName == "product") {
                  this.listAtt = this.listattProduct;
                } else if (this.aux.bdTableName == "client") {
                  this.listAtt = this.listattClient;
                } else if (this.aux.bdTableName == "addresses") {
                  this.listAtt = this.listattadress;
                } else if (this.aux.bdTableName == "transaction") {
                  this.listAtt = this.listattTransaction;
                }
                console.log(this.aux.bdfield);
                this.clientForm.get("bdfield").setValue(this.aux.bdfield);
              });
            });
          });
        });
      });
    });
  }

  updateMap() {
    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }
    this.service.update(this.id, this.clientForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(["/crudMap"]);
      console.log(data);
    });
  }
  changeAtt(event) {
    if (this.clientForm.value["bdTableName"] == "product") {
      this.listAtt = this.listattProduct;
    } else if (this.clientForm.value["bdTableName"] == "client") {
      this.listAtt = this.listattClient;
    } else if (this.clientForm.value["bdTableName"] == "addresses") {
      this.listAtt = this.listattadress;
    } else if (this.clientForm.value["bdTableName"] == "transaction") {
      this.listAtt = this.listattTransaction;
    }
    console.log(this.listAtt);
  }
}
