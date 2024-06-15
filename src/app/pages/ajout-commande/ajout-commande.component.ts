import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/models/client';
import { Commande } from 'app/models/commande';
import { Produit } from 'app/models/produit';
import { RowCommande } from 'app/models/row-commande';
import { ClientService } from 'app/services/client.service';
import { CommandeService } from 'app/services/commande.service';
import { CommercialService } from 'app/services/commercial.service';
import { ProduitService } from 'app/services/produit.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.scss']
})
export class AjoutCommandeComponent implements OnInit {


  tabClients!: Client[];
  tabProduits!:Produit[];
  selectedProductPrice: number = 0;


  newOrder: Commande = new Commande(null,[new RowCommande(null, null, null, null)],null ,null); 

  
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService,private commandeService:CommandeService,private produitService:ProduitService
  ) {
   
  }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(data => { this.tabClients = data; })
    this.produitService.getAll().subscribe(data=>{this.tabProduits=data})
  }

 setPriceHT(product:Produit)

 {
  this.selectedProductPrice=product.price;
  
 }

  ajouterCommande() {

   let cli=this.newOrder.client;
   let aux:any[]=[];

   for(let i=0;i<this.newOrder.rows.length;i++)
   {
    aux.push({"qte":this.newOrder.rows[i].qte,"productId":this.newOrder.rows[i].product.ref})
   }


   this.commandeService.addCommande(cli.id,aux).subscribe(data=>{console.log(data);
   this.router.navigate(["/commandes"])}
   )
   

      
  }

  addRow() {
    this.newOrder.rows.push(new RowCommande(null, null, null, null));
  }

  removeRow(index: number) {
    this.newOrder.rows.splice(index, 1);
  }

}