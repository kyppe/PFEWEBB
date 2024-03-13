import { Component, OnInit } from '@angular/core';
import { Produit } from 'app/models/produit';
import { ProduitService } from 'app/services/produit.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  tabProduits!:Produit[];
  filteredProduits!:Produit[];

  constructor(private produitService:ProduitService,private router:Router ){


  }


  ngOnInit(){
      this.produitService.getAll().subscribe(data=>{this.tabProduits=data;this.filteredProduits=data});

  }



  editProduit(id:string)
  {
    this.router.navigate(['editProduit',id]);
  }

  supprimerProduit(id:string)
  {
    this.produitService.deleteproduit(id).subscribe(data=>{})
  }

}
