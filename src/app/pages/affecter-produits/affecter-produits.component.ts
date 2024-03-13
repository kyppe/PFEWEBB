import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'app/models/categorie';
import { Client } from 'app/models/client';
import { Produit } from 'app/models/produit';
import { CategorieService } from 'app/services/categorie.service';
import { ProduitService } from 'app/services/produit.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-affecter-produits',
  templateUrl: './affecter-produits.component.html',
  styleUrls: ['./affecter-produits.component.scss']
})
export class AffecterProduitsComponent implements OnInit {

  idcat!: number;
  cat!:Categorie;
  CategorieName: string = '';
  selectedProduits: number[] = []; 
  produits!:Produit[];

  constructor(private router: Router,private produitsevice:ProduitService,private categorieService:CategorieService,    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.produitsevice.getAll().subscribe(data=>this.produits=data);

    this.activatedRoute.params.subscribe(params=>{
      this.idcat = +params['id'];    //+ converti id en string
      this.categorieService.getById(this.idcat).subscribe(data=>this.cat=data)

    })



  }

  saveMatching() {
    const requests = [];
  
    for (let i = 0; i < this.selectedProduits.length; i++) {
      requests.push(this.produitsevice.affecterCategorie(this.selectedProduits[i], this.idcat));
    }
    
    // elimine probleme d'async

    forkJoin(requests).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}