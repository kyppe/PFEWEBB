import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {


  clientForm!:FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private clientService:ClientService
    ) {
      this.clientForm=this.fb.group({
        Email:[''],nom:[""],telephone:[''],mf:['']
      })
     }

  ngOnInit(): void {
  }

  


  ajouterClient()
  {

    this.clientService.addClient({
      email:this.clientForm.value.Email,
      name:this.clientForm.value.nom,
      phone:this.clientForm.value.telephone,
      mf:this.clientForm.value.mf
    }).subscribe(data=>{this.router.navigate(['/clients']);console.log(data)}
    )  

    
  }

}
