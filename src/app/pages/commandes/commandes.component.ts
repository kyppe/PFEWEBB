import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'app/models/commande';
import { CommandeService } from 'app/services/commande.service';

@Component({
    selector: 'commandes-cmp',
    moduleId: module.id,
    templateUrl: 'commandes.component.html'
})

export class CommandesComponent implements OnInit {

    tabCommandes!: Commande[];


    constructor(public commandeService: CommandeService, private router: Router) { }


    ngOnInit(): void {
        this.commandeService.getAll().subscribe(data => this.tabCommandes = data)
    }


    toDetailPage(id: number) {
        this.router.navigate(['/detailCommande', id])
    }

    updateCommande(id: number) {
        this.router.navigate(['/editCommande', id]);

    }

    deleteCommande(id: number) {
        this.commandeService.deleteCommande(id).subscribe(data => { })

    }


}
