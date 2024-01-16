import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-free-trial-section',
  templateUrl: './free-trial-section.component.html',
  styleUrls: ['./free-trial-section.component.css']
})
export class FreeTrialSectionComponent implements OnInit{ 
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
    console.log(this.isNight)
  })
  }
}
