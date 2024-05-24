import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  id: number;
  aux!: Client;

  clientForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService
  ) {
    this.clientForm = this.fb.group({
      Email: ['',[Validators.required, Validators.email]],  nom: [""], telephone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], cin: ['']
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];      // + convertit l id en string
      this.clientService.getById(this.id).subscribe(data => { this.aux = data; 
        this.clientForm.get('Email').setValue(this.aux.email);
        this.clientForm.get('nom').setValue(this.aux.name);
        this.clientForm.get('telephone').setValue(this.aux.phone);
        this.clientForm.get('cin').setValue(this.aux.mf);
        });

    });
  }



  EditClient() {

    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }


    this.clientService.updateClient(this.id, {
      email: this.clientForm.value.Email,
      password:this.aux.password,
      name: this.clientForm.value.prenom,
      lastname: this.clientForm.value.nom,
      phone: this.clientForm.value.telephone,
      cin: this.clientForm.value.cin
    }).subscribe(data => { this.router.navigate(['/clients']); console.log(data) }
    )


  }

}
