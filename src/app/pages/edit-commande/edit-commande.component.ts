import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/models/client';
import { Commande } from 'app/models/commande';
import { Produit } from 'app/models/produit';
import { RowCommande } from 'app/models/row-commande';
import { ClientService } from 'app/services/client.service';
import { CommandeService } from 'app/services/commande.service';
import { ProduitService } from 'app/services/produit.service';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.scss']
})
export class EditCommandeComponent implements OnInit {


  tabClients!: Client[];
  tabProduits!: Produit[];
  id!: string;

  newOrder!: Commande ;

  orderForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService, private commandeService: CommandeService, private produitService: ProduitService
  ) {
  }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];      // + convertit l id en string
      this.commandeService.getById(this.id).subscribe(data => { this.newOrder = data;         
      })
    })
    this.produitService.getAll().subscribe(data => { this.tabProduits = data })

    

  }

  ajouterCommande() {

    let cli = this.newOrder.client;
    let aux: any[] = [];

    for (let i = 0; i < this.newOrder.rows.length; i++) {
      aux.push({ "qte": this.newOrder.rows[i].qte, "productId": this.newOrder.rows[i].product.ref })
    }

    console.log(aux);
    
    this.commandeService.updateCommande(this.id, {"rows":aux}).subscribe(data => {
      console.log(data);
      this.router.navigate(["/commandes"])
    }
    )
    
  }

  onProductChange(selectedProduct: any, index: number) {
    
    this.newOrder.rows[index].product=this.tabProduits.filter(pro=>pro.ref==selectedProduct)[0];
    
  }

  addRow() {
    console.log("addR");
    
    this.newOrder.rows.push(new RowCommande(null, null, null, null));
  }

  removeRow(index: number) {
    this.newOrder.rows.splice(index, 1);
  }

}
