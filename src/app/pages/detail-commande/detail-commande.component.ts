import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'app/models/commande';
import { CommandeService } from 'app/services/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.scss']
})
export class DetailCommandeComponent implements OnInit {

id!:number;
  commande!:Commande;

  constructor(private activatedRoute: ActivatedRoute,private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];    //+ converti id en string
      this.commandeService.getById(this.id).subscribe(data=>{this.commande=data;console.log(this.commande.rows);
      
      
      })
  })


  }
}
