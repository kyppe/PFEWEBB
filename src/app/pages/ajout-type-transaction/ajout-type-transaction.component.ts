import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTransactionService } from 'app/services/type-transaction.service';

@Component({
  selector: 'app-ajout-type-transaction',
  templateUrl: './ajout-type-transaction.component.html',
  styleUrls: ['./ajout-type-transaction.component.scss']
})
export class AjoutTypeTransactionComponent implements OnInit {
  typeTransactionForm!:FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,private typeTransactionService:TypeTransactionService
    ) {
      this.typeTransactionForm=this.fb.group({
        type:[''],
        value:['']
      })
     }

  ngOnInit(): void {
  }

  


  ajoutertypeTransaction()
  {

    this.typeTransactionService.addTypeTransaction({
      type:this.typeTransactionForm.value.type,
      value:this.typeTransactionForm.value.value
     
    }).subscribe(data=>{this.router.navigate(['/typeTransaction']);console.log(data)}
    )  

    
  }

}
