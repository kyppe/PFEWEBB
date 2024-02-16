import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';

@Component({
    selector: 'clients-cmp',
    moduleId: module.id,
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {

    tabClients!: Client[];

    constructor(public clientService: ClientService,private router: Router) {

     }


     ngOnInit(): void {
        this.clientService.getAll().subscribe((clients: Client[]) => {
          this.tabClients = clients;
          console.log(this.tabClients); 
        });
      }


      deleteClient(id:number)
      {
        console.log("aaaa")
        this.clientService.deleteClient(id).subscribe(data=>{console.log("hello");
        ;location.reload()})
        
      }


}
