import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';
import { log } from 'console';

@Component({
    selector: 'clients-cmp',
    moduleId: module.id,
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {

    tabClients!: Client[];
    searchText: string = '';
    filteredClients!:Client[];


    constructor(public clientService: ClientService,private router: Router) {

     }


     ngOnInit(): void {
        this.clientService.getAll().subscribe((clients: Client[]) => {
          this.tabClients = clients;
          this.filteredClients=this.tabClients
        });
      }

      filterClients() {
        
        this.filteredClients=this.tabClients.filter(client => {
           return client.name.toLowerCase().includes(this.searchText.toLowerCase());
           
        });

        console.log(this.filteredClients);
      }


      deleteClient(id:number)
      {
        this.clientService.deleteClient(id).subscribe(data=>{
          
          this.filteredClients=this.filteredClients.filter(e=>e.id!=id);
          console.log(this.filteredClients);
          
        })
        
      }

      updateClient(id:number)
      {
        this.router.navigate(['/editClient', id]);

      }

      detailsClient(id:number)
      {
        this.router.navigate(['/detailClient', id]);

      }

}
