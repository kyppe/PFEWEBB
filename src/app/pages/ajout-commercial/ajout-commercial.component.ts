import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommercialService } from 'app/services/commercial.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajout-commercial',
  templateUrl: './ajout-commercial.component.html',
  styleUrls: ['./ajout-commercial.component.scss']
})
export class AjoutCommercialComponent implements OnInit {

  commercialForm!:FormGroup;
  submitted = false;

  constructor(private snackBar: MatSnackBar,private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private commercialService:CommercialService
    ) {
      this.commercialForm=this.fb.group({
        Email:['',[Validators.required, Validators.email]],password:[''],prenom:['',[Validators.required]],nom:["",[Validators.required]],telephone:['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],mf:['',[Validators.required]]
      })
     }

  ngOnInit(): void {
  }



  ajouterCommercial()
  {
    console.log("aa");
    

    this.submitted = true;

    if (this.commercialForm.invalid) {
      console.log("bb");

      return;
    }

    this.commercialService.addCommercial({
      email:this.commercialForm.value.Email,
      name:this.commercialForm.value.prenom,
      lastname:this.commercialForm.value.nom,
      phone:this.commercialForm.value.telephone,
      cin:this.commercialForm.value.cin
    }).subscribe(data=>{this.router.navigate(['/commerciaux']);console.log(data)}
   
    )
    this.snackBar.open('Operation was successful!', 'Close', {
      duration: 3000 // Duration in milliseconds
    });
    
  }

}
