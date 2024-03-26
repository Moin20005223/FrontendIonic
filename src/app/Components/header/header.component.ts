import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  imagePath:String="../../../assets/logo.jpg";
  searchBar:String="../../../assets/searchbar.png";

  constructor() { 
    
  }
  ngOnInit() {}
 
}
