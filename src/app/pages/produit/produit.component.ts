import { Component, OnInit } from '@angular/core';
import { Produit } from 'app/models/produit';
import { ProduitService } from 'app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  tabProduits!:Produit[];

  constructor(private produitService:ProduitService){


  }


  ngOnInit(){
      this.produitService.getAll().subscribe(data=>this.tabProduits=data);

  }

}
