import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';
import { log } from 'console';
import { io, Socket } from "socket.io-client";

@Component({
    selector: 'clients-cmp',
    moduleId: module.id,
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit {

    tabClients!: Client[];
    searchText: string = '';
    filteredClients!:Client[];
    SOCKET_SERVER_URL = "http://localhost:3000";
    private socket: Socket;


    constructor(public clientService: ClientService,private router: Router) {

     }


     ngOnInit(): void {
      this.socket = io(this.SOCKET_SERVER_URL, { transports: ["websocket"] });

        this.clientService.getAll().subscribe((clients: Client[]) => {
          this.tabClients = clients;
          this.filteredClients=this.tabClients
        });
        this.socket.on("allclients", (data) => {
          console.log(data);
          this.tabClients=data
          this.filteredClients = this.tabClients;
  
        // Update the commandes when a new command is received
  
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
      ActiverCompte(i:any,client:Client) {
        console.log(client);
        
        this.clientService.activateClient(client.id,client).subscribe(data=>{
          
          client=data
          this.tabClients[i]=data
          console.log(client);

        })
      }

}
