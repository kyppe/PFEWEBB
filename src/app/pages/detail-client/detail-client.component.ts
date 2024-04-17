import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {


  id!: number;
  client!: Client;
  tabClients!: Client[];
    searchText: string = '';
    filteredClients!:Client[];
  sum:number=0
  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];    //+ converti id en string
      this.clientService.getById(this.id).subscribe(data => {
       console.log(data);
       
        this.client = data;
        for (let index = 0; index < this.client.transactions.length; index++) {
          if (this.client.transactions[index].typeTra==1) {
            this.sum=this.sum+this.client.transactions[index].credit

          }else 
          {
            this.sum=this.sum-this.client.transactions[index].credit

          }

          
        }

      });

    })

  }


  ActiverCompte() {
    this.clientService.activateClient(this.id,this.client).subscribe(data=>{location.reload()})
  }

}
