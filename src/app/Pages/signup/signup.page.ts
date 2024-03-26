import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name:string;
  email:string;
  password:string;
  cPassword:string;
  constructor(private apiService:APIService) { }

  ngOnInit() {
    
  }

  register()
  {
    this.apiService.fetchRegisterData({name:this.name,email:this.email,password:this.password}).then(e=>{
      alert("User registered!Now Login!");
    })
    .catch(err=>{
      throw err
    });
  }
  
}
