import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/models/client';
import { Profile } from 'app/models/profile';
import { ClientService } from 'app/services/client.service';
import { ProfileService } from 'app/services/profile.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-affecter-clients',
  templateUrl: './affecter-clients.component.html',
  styleUrls: ['./affecter-clients.component.scss']
})
export class AffecterClientsComponent implements OnInit {

  idprof!: number;
  prof!:Profile;
  profileName: string = '';
  selectedClients: number[] = []; 
  clients!:Client[];

  constructor(private router: Router,private clientSevice:ClientService,private profileService:ProfileService,    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.clientSevice.getAll().subscribe(data=>this.clients=data);

    this.activatedRoute.params.subscribe(params=>{
      this.idprof = +params['id'];    //+ converti id en string
      this.profileService.getById(this.idprof).subscribe(data=>this.prof=data)

    })



  }

  saveMatching() {
    const requests = [];
  
    for (let i = 0; i < this.selectedClients.length; i++) {
      requests.push(this.clientSevice.affecterProfile(this.selectedClients[i], this.idprof));
    }
  
    forkJoin(requests).subscribe(() => {
     
      this.router.navigate(['/profiles']);
    }, error => {
      console.error('Error ==', error);
    });
  }
}