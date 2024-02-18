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

export class CommerciauxComponent implements OnInit{


    
    tabCommerciaux!:Commercial[];


    constructor(private commercialService:CommercialService,private router: Router){}

    ngOnInit(){

        this.commercialService.getAll().subscribe(data=>this.tabCommerciaux=data)

    }


   
    
    updateCommercial(id:number)
    {
      this.router.navigate(['/commerciaux', id]);

    }

    deleteCommercial(id:number)
    {
      this.commercialService.deleteCommercial(id).subscribe(data=>{console.log("hello");
      ;location.reload()})
      
    }
}
