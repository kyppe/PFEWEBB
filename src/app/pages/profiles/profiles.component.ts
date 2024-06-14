import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'app/models/profile';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  notification:string=""
  tabProfiles!: Profile[];
  searchText: string = '';
  filteredProfiles!: Profile[];

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {

    this.profileService.getAll().subscribe(data => {
      this.tabProfiles = data;
      this.filteredProfiles=this.tabProfiles;

    })
  }


  filterProfiles() {
        
    this.filteredProfiles=this.tabProfiles.filter(Profile => {
       return Profile.intituleProfile.toLowerCase().includes(this.searchText.toLowerCase());
       
    });

    console.log(this.filteredProfiles);
  }


  deleteProfile(id:number)
  {
    this.profileService.deleteProfile(id).subscribe(data=>{
      
      this.filteredProfiles=this.filteredProfiles.filter(e=>e.id!=id);
      console.log(this.filteredProfiles);
      
     this.notification = "Client supprimé !";

     setTimeout(() => {
       this.notification = "";
     }, 2000); 

      
    })
    
  }



  editProfile(cat: any) {
    cat.editing = true; 
    
  }
  
  saveProfile(cat: any) {
   
    console.log(cat.intituleCategorie);

    this.profileService.updateProfile(cat.id, cat)
      .subscribe((data) => {
        cat.editing = false; 
      }
      )
  }


  affecterClients(id:number)
  {
    this.router.navigate(['/affecterClients',id]);
  }

 
}
