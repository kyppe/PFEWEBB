import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],  password: [""]
    })
  }

  login()
  {
   this.clientService.login(this.loginForm.value["email"],this.loginForm.value["password"]).subscribe(data => {

    console.log(data);
    localStorage.setItem("accessToken",data["accessToken"])
   })
  }
}
