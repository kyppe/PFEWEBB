import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'app/models/client';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {


  id!: number;
  client!: Client;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];    //+ converti id en string
      this.clientService.getById(this.id).subscribe(data => {
        this.client = data;
      });

    })
  }


  ActiverCompte() {
    this.clientService.activateClient(this.id,this.client).subscribe(data=>{location.reload()})
  }

}
