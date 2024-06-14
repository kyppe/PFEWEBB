import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTransaction } from 'app/models/type-transaction';
import { TypeTransactionService } from 'app/services/type-transaction.service';

@Component({
  selector: 'app-type-transaction',
  templateUrl: './type-transaction.component.html',
  styleUrls: ['./type-transaction.component.scss']
})
export class TypeTransactionComponent implements OnInit {

  constructor(private typeTransactionService: TypeTransactionService, private router: Router) { }

  typeTransactions!: TypeTransaction[]
  filteredTypeTransactions!: TypeTransaction[]

  ngOnInit(): void {
    this.typeTransactionService.getAll().subscribe(data => {
      this.typeTransactions = data;
      this.filteredTypeTransactions=data;
    })
  }

  deleteTypeTransaction(id: number) {
    this.typeTransactionService.deleteTypeTransaction(id).subscribe(data => {

      this.filteredTypeTransactions = this.filteredTypeTransactions.filter(e => e.id != id);
      console.log("aa");
      
      console.log(this.filteredTypeTransactions);

    })

  }


  updateTypeTransaction(id: number) {
    this.router.navigate(['/editTypeTransaction', id]);

  }

}
