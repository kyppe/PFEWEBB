import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { CategorieService } from 'app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  tabCategories!: Categorie[];
  searchText: string = '';
  filteredCategories!: Categorie[];

  orig!:string;
  aux:boolean=false;

  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit() {

    this.categorieService.getAll().subscribe(data => {
      this.tabCategories = data;
      this.filteredCategories=this.tabCategories;

    })
  }


  filterCategories() {
        
    this.filteredCategories=this.tabCategories.filter(Categorie => {
       return Categorie.intituleCategorie.toLowerCase().includes(this.searchText.toLowerCase());
       
    });

    console.log(this.filteredCategories);
  }


  deleteCategorie(intituleCategorie:string)
  {
    this.categorieService.deleteCategorie(intituleCategorie).subscribe(data=>{
      
      this.filteredCategories=this.filteredCategories.filter(e=>e.intituleCategorie!=intituleCategorie);
      console.log(this.filteredCategories);
      
    })
    
  }


  editCategory(cat: any) {
    cat.editing = true; 
    
  }
  
  saveCategory(cat: any) {
   
    console.log(cat.intituleCategorie);

    this.categorieService.updateCategorie(cat.id, cat)
      .subscribe((data) => {
        cat.editing = false; 
      }
      )
  }

 
}
