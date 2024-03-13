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


  deleteProfile(intituleProfile:string)
  {
    this.profileService.deleteProfile(intituleProfile).subscribe(data=>{
      
      this.filteredProfiles=this.filteredProfiles.filter(e=>e.intituleProfile!=intituleProfile);
      console.log(this.filteredProfiles);
      
    })
    
  }


  updateProfile(intituleProfile: string) {
    this.router.navigate(['/editProfile', intituleProfile]);

  }

 
}
