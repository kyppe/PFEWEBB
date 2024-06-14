import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'app/models/commercial';
import { CommercialService } from 'app/services/commercial.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'commerciaux-cmp',
  moduleId: module.id,
  templateUrl: 'commerciaux.component.html'
})

export class CommerciauxComponent implements OnInit {

  notification:string=""

  tabCommerciaux!: Commercial[];
  searchText: string = '';
  filteredCommercials!: Commercial[];

  constructor(private commercialService: CommercialService, private router: Router) { }

  ngOnInit() {

    this.commercialService.getAll().subscribe(data => {
      this.tabCommerciaux = data;
      this.filteredCommercials=this.tabCommerciaux;

    })
  }


  filterCommercials() {
        
    this.filteredCommercials=this.tabCommerciaux.filter(Commercial => {
       return Commercial.name.toLowerCase().includes(this.searchText.toLowerCase());
       
    });

    console.log(this.filteredCommercials);
  }


  deleteCommercial(id:number)
  {
    this.commercialService.deleteCommercial(id).subscribe(data=>{
      
      this.filteredCommercials=this.filteredCommercials.filter(e=>e.id!=id);
      console.log(this.filteredCommercials);
      this.notification = "Client supprimé !";

      setTimeout(() => {
        this.notification = "";
      }, 2000); 
    
    })
    
  }


  updateCommercial(id: number) {
    this.router.navigate(['/editCommercial', id]);

  }

 
}
