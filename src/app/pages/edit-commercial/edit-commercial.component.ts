import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from 'app/models/commercial';
import { CommercialService } from 'app/services/commercial.service';

@Component({
  selector: 'app-edit-commercial',
  templateUrl: './edit-commercial.component.html',
  styleUrls: ['./edit-commercial.component.scss']
})
export class EditCommercialComponent implements OnInit {

  id: number;
  aux!: Commercial;

  commercialForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private commercialService: CommercialService
  ) {
    this.commercialForm = this.fb.group({
      Email: ['',[Validators.required, Validators.email]], prenom: [''], nom: [""], telephone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], cin: ['']
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];      // + convertit l id en string
      this.commercialService.getById(this.id).subscribe(data => { this.aux = data;
        this.commercialForm.get('Email').setValue(this.aux.email);
        this.commercialForm.get('prenom').setValue(this.aux.name);
        this.commercialForm.get('nom').setValue(this.aux.lastname);
        this.commercialForm.get('telephone').setValue(this.aux.phone);
        this.commercialForm.get('cin').setValue(this.aux.cin);
      });

    });
  }

 


  Editcommercial() {

    this.submitted = true;

    if (this.commercialForm.invalid) {
      return;
    }

    this.commercialService.updateCommercial(this.id, {
      email: this.commercialForm.value.Email,
      password:this.aux.password,
      name: this.commercialForm.value.prenom,
      lastname: this.commercialForm.value.nom,
      phone: this.commercialForm.value.telephone,
      cin: this.commercialForm.value.cin
    }).subscribe(data => { this.router.navigate(['/commerciaux']); console.log(data) }
    )


  }

}
