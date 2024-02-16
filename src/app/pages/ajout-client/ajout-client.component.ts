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
        Email:[''],prenom:[''],nom:[""],telephone:[''],cin:['']
      })
     }

  ngOnInit(): void {
  }

  generateRandomPassword(length: number): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }


  ajouterClient()
  {

    this.clientService.addClient({
      email:this.clientForm.value.Email,
      password:this.generateRandomPassword(7),
      name:this.clientForm.value.prenom,
      lastname:this.clientForm.value.nom,
      phone:this.clientForm.value.telephone,
      cin:this.clientForm.value.cin
    }).subscribe(data=>{this.router.navigate(['/clients']);console.log(data)}
    )  

    
  }

}
