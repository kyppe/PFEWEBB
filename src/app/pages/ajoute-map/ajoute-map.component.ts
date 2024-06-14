import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mapper } from 'app/models/mapper';
import { AdresseService } from 'app/services/adresse.service';
import { ClientService } from 'app/services/client.service';
import { MapsService } from 'app/services/maps.service';

@Component({
  selector: 'app-ajoute-map',
  templateUrl: './ajoute-map.component.html',
  styleUrls: ['./ajoute-map.component.scss']
})
export class AjouteMapComponent implements OnInit {
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
      primaryKey: [0],

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
                  this.listAtt = this.listattProduct;
                this.clientForm.get("bdTableName").setValue("product");
                console.log(this.clientForm.value["bdTableName"]);
                
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
    this.service.add(this.clientForm.value).subscribe((data) => {
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
