import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-ajout-profile',
  templateUrl: './ajout-profile.component.html',
  styleUrls: ['./ajout-profile.component.scss']
})
export class AjoutProfileComponent implements OnInit {

  profileForm!:FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private profileService:ProfileService
    ) {
      this.profileForm=this.fb.group({
        intituleProfile:['']
      })
     }

  ngOnInit(): void {
  }

  


  ajouterProfile()
  {

    this.profileService.addProfile({
      intituleProfile:this.profileForm.value.intituleProfile,
     
    }).subscribe(data=>{this.router.navigate(['/profiles']);console.log(data)}
    )  

    
  }

}