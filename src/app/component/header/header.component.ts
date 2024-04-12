import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
auth: any;
  name: any;
  signOut(){
    this.cookieService.deleteAll()
    window.location.reload();
  }
  constructor(private nightMode: NightmodeService, private cookieService: CookieService,){}
  ngOnInit(){
    this.name = this.cookieService.get("user-name")

    if (this.name){
     this.auth = true
      
    } else{
      this.auth = false
    }
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
