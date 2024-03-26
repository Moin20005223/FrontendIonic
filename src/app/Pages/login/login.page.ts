import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private apiService:APIService,private router:Router) { }

  email:string;
  password:string;

  ngOnInit()
  {

  } 
  login()
  {
    this.apiService.fetchLoginData({email:this.email,password:this.password}).then((res)=>{
      if(res.login)
      {
        localStorage.setItem("login","true");
        alert("Login Successfull");
        this.router.navigateByUrl("/home");
      }
      else
      {
        localStorage.setItem("login","false");
        alert("Logout unSuccessfull");
      }
    })
    .catch(err=>{
      throw err
    });
  }


}
