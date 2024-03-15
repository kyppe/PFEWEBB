import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { MatchProfileCategorie } from 'app/models/match-profile-categorie';
import { Profile } from 'app/models/profile';
import { CategorieService } from 'app/services/categorie.service';
import { MatchProfileCategorieService } from 'app/services/match-profile-categorie.service';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-add-match-profile-categorie',
  templateUrl: './add-match-profile-categorie.component.html',
  styleUrls: ['./add-match-profile-categorie.component.scss']
})
export class AddMatchProfileCategorieComponent implements OnInit {


  profiles!: Profile[];
  categories!: Categorie[];
  newMatchProfileCategorie: MatchProfileCategorie = new MatchProfileCategorie(null, null, null, null);

  constructor(private profileService: ProfileService, private router: Router, private categorieService: CategorieService, private matchProfileCategorieService: MatchProfileCategorieService) {

  }
  ngOnInit(): void {
    this.profileService.getAll().subscribe(data => {
      this.profiles = data; console.log(this.profiles);
    })
    this.categorieService.getAll().subscribe(data => this.categories = data)


  }


  submitForm() {

    

    this.matchProfileCategorieService.addMatchProfileCategories({ "profileId": this.newMatchProfileCategorie.profile.id,"categorieId": this.newMatchProfileCategorie.categorie.id,  "remise": this.newMatchProfileCategorie.remise }).subscribe(data => this.router.navigate(['/matchProfileCategories'])
    )
  }

}