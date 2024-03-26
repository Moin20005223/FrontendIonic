import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  imagePath:String="../../../assets/logo.jpg";
  searchBar:String="../../../assets/searchbar.png";

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 
    
  }
  ngOnInit() {}
 
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
