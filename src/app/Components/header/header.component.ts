import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  imagePath:String="../../../assets/logo.jpg";
  searchBar:String="../../../assets/searchbar.png";

  constructor(private renderer: Renderer2, private elementRef: ElementRef,private router:Router,private apiService:APIService) { 
    
  }
  buttonName:any
  ngOnInit() {
    if(localStorage.getItem("login")==="true")
    {
      this.buttonName="Logout";
    }
    else
    {
      this.buttonName="Login";
    }
  }
  
  //Logout checking
  loginCheck()
  {
    if(localStorage.getItem("login")==="true")
    {
      this.router.navigateByUrl("/home");
      this.buttonName="Login";
      localStorage.setItem("login","false");
      this.apiService.fetchLogout().then(res=>{
        alert("Logout successfull");
      })
      .catch(err=>{
        throw err;
      })
    }
    else
    {
      this.router.navigateByUrl("/login");
      this.buttonName="Logout";
    }
  }
  login()
  {
     const accountPanel=document.querySelector(".AccountPanel");
     if (accountPanel) {
      const accountStyle = window.getComputedStyle(accountPanel);
      if (accountStyle.display === 'none') {
        // If account panel is currently hidden, show it
        this.renderer.setStyle(accountPanel,'display','block');
      } else {
        // If account panel is currently visible, hide it
        this.renderer.setStyle(accountPanel,'display','none');
      }
    }
  }
}
