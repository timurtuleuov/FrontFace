import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-brand-section',
  templateUrl: './brand-section.component.html',
  styleUrls: ['./brand-section.component.css']
})
export class BrandSectionComponent implements OnInit{ 
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

}