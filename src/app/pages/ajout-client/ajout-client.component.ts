import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "app/services/client.service";

@Component({
  selector: "app-ajout-client",
  templateUrl: "./ajout-client.component.html",
  styleUrls: ["./ajout-client.component.scss"],
})
export class AjoutClientComponent implements OnInit {
  clientForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService
  ) {
    this.clientForm = this.fb.group({
      Email: ["", [Validators.required, Validators.email]],
      nom: ["", [Validators.required]],
      telephone: ["", [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      mf: ["", [Validators.required]],
      lat : ["", [Validators.required]],
      long : ["", [Validators.required]],
      address : ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  ajouterClient() {
    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }

    this.clientService
      .addClient({
        email: this.clientForm.value.Email,
        name: this.clientForm.value.nom,
        phone: this.clientForm.value.telephone,
        mf: this.clientForm.value.mf,
        address:{
          long:this.clientForm.value.long,
          lat:this.clientForm.value.lat,
          address:this.clientForm.value.address,
        }
      })
      .subscribe((data) => {
        this.router.navigate(["/clients"]);
        console.log(data);
      });
  }
}
