import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'app/services/categorie.service';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {

  categorieForm!:FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private categorieService:CategorieService
    ) {
      this.categorieForm=this.fb.group({
        intituleCategorie:['']
      })
     }

  ngOnInit(): void {
  }

  


  ajouterCategorie()
  {

    this.categorieService.addCategorie({
      intituleCategorie:this.categorieForm.value.intituleCategorie,
     
    }).subscribe(data=>{this.router.navigate(['/categories']);console.log(data)}
    )  

    
  }

}
