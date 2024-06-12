import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mapper } from "app/models/mapper";
import { Maps } from "app/models/maps";
import { MatchProfileCategorie } from "app/models/match-profile-categorie";
import { CommandeService } from "app/services/commande.service";
import { MapsService } from "app/services/maps.service";
import { MatchProfileCategorieService } from "app/services/match-profile-categorie.service";
import { Socket } from "socket.io-client";

@Component({
  selector: "app-crud-map",
  templateUrl: "./crud-map.component.html",
  styleUrls: ["./crud-map.component.scss"],
})
export class CrudMapComponent implements OnInit {
  maps: Mapper[] = [];

  constructor(
    public service: MapsService,
    private router: Router,
    public matchProfCatService: MatchProfileCategorieService
  ) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.maps = data;
    });
  }
  updateMap(id: number) {
    this.router.navigate(["/updateMap", id]);
  }

  deleteMap(id: number) {
    this.service.delete(id).subscribe(data => {
      console.log(data);
      
      this.maps=this.maps.filter(e => e.id!=id )
    })
  }
}
