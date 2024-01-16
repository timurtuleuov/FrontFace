import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private nightMode: NightmodeService){}
  ngOnInit(){
  }
  public isVisible: boolean = true;
  public isNight: boolean = this.nightMode.darkMode;

  toggleVisible(){
    this.isVisible = !this.isVisible;
  }

  toggleNight(){
    this.nightMode.toggleMode()
    this.isNight = this.nightMode.darkMode;
    

  }

}
