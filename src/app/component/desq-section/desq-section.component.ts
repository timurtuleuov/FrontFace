import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-desq-section',
  templateUrl: './desq-section.component.html',
  styleUrls: ['./desq-section.component.css']
})
export class DesqSectionComponent implements OnInit{ 
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
    console.log(this.isNight)
  })
  }
}
