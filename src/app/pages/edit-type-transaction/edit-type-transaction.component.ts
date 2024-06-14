import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTransaction } from 'app/models/type-transaction';
import { TypeTransactionService } from 'app/services/type-transaction.service';
@Component({
  selector: 'app-edit-type-transaction',
  templateUrl: './edit-type-transaction.component.html',
  styleUrls: ['./edit-type-transaction.component.scss']
})
export class EditTypeTransactionComponent implements OnInit {

  typeTransactionForm!: FormGroup;
  id!: number
  aux!: TypeTransaction
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private typeTransactionService: TypeTransactionService
  ) {
    this.typeTransactionForm = this.fb.group({
      type: [''],
      value: ['']
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];      // + convertit l id en string
      this.typeTransactionService.getById(this.id).subscribe(data => {
        this.aux = data;
        this.typeTransactionForm.get('type').setValue(this.aux.type);
        this.typeTransactionForm.get('value').setValue(this.aux.value);

      });

    });
  }

  editTypeTransaction() {

    

    this.typeTransactionService.updateTypeTransaction(this.id, {
      type: this.typeTransactionForm.value.type,
      value:this.typeTransactionForm.value.value,
     
    }).subscribe(data => { this.router.navigate(['/typeTransaction']); console.log(data) }
    )


  }




}