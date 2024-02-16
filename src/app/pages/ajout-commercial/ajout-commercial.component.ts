import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommercialService } from 'app/services/commercial.service';
@Component({
  selector: 'app-ajout-commercial',
  templateUrl: './ajout-commercial.component.html',
  styleUrls: ['./ajout-commercial.component.scss']
})
export class AjoutCommercialComponent implements OnInit {

  commercialForm!:FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private commercialService:CommercialService
    ) {
      this.commercialForm=this.fb.group({
        Email:[''],password:[''],prenom:[''],nom:[""],telephone:[''],cin:['']
      })
     }

  ngOnInit(): void {
  }



  ajouterCommercial()
  {

    this.commercialService.addCommercial({
      email:this.commercialForm.value.Email,
      password:this.commercialForm.value.password,
      name:this.commercialForm.value.prenom,
      lastname:this.commercialForm.value.nom,
      phone:this.commercialForm.value.telephone,
      cin:this.commercialForm.value.cin
    }).subscribe(data=>{this.router.navigate(['/commerciaux']);console.log(data)}
    )  

    
  }
}
