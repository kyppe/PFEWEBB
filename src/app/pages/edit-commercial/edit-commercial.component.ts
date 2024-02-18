import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private commercialService: CommercialService
  ) {
    this.commercialForm = this.fb.group({
      Email: [''], prenom: [''], nom: [""], telephone: [''], cin: ['']
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];      // + convertit l id en string
      this.commercialService.getById(this.id).subscribe(data => { this.aux = data; this.commercialForm.patchValue(this.aux); });

    });
  }

 


  Editcommercial() {

    this.commercialService.updateCommercial(this.id, {
      email: this.commercialForm.value.Email,
      password:this.aux.password,
      name: this.commercialForm.value.prenom,
      lastname: this.commercialForm.value.nom,
      phone: this.commercialForm.value.telephone,
      cin: this.commercialForm.value.cin
    }).subscribe(data => { this.router.navigate(['/commercials']); console.log(data) }
    )


  }

}
