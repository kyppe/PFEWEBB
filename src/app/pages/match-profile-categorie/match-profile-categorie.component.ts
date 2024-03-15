import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchProfileCategorie } from 'app/models/match-profile-categorie';
import { MatchProfileCategorieService } from 'app/services/match-profile-categorie.service';

@Component({
  selector: 'app-match-profile-categorie',
  templateUrl: './match-profile-categorie.component.html',
  styleUrls: ['./match-profile-categorie.component.scss']
})
export class MatchProfileCategorieComponent implements OnInit {

  tabMatchProfileCategories!: MatchProfileCategorie[];
  searchText: string = '';
  filteredMatchProfileCategories!:MatchProfileCategorie[];


  constructor(public matchProfileCategorieService: MatchProfileCategorieService,private router: Router) {

   }


   ngOnInit(): void {

      this.matchProfileCategorieService.getAll().subscribe((MatchProfileCategories: MatchProfileCategorie[]) => {
        this.tabMatchProfileCategories = MatchProfileCategories;
        this.filteredMatchProfileCategories=this.tabMatchProfileCategories
      });
   
    }
 
    filterMatchProfileCategories() {
      
      this.filteredMatchProfileCategories=this.tabMatchProfileCategories.filter(MatchProfileCategorie => {
         return MatchProfileCategorie.profile.intituleProfile.toLowerCase().includes(this.searchText.toLowerCase());
         
      });

      console.log(this.filteredMatchProfileCategories);
    }


    deleteMatchProfileCategorie(id:number)
    {
      this.matchProfileCategorieService.deleteMatchProfileCategories(id).subscribe(data=>{
        
        this.filteredMatchProfileCategories=this.filteredMatchProfileCategories.filter(e=>e.id!=id);
        console.log(this.filteredMatchProfileCategories);
        
      })
      
    }

  

  
  }
