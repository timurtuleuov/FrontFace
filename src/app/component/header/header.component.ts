import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(){
  }
  public isVisible: boolean = true;
  public isNight: boolean = false;

  toggleVisible(){
    this.isVisible = !this.isVisible;
  }

  toggleNight(){
    this.isNight = !this.isNight;
  }

}
