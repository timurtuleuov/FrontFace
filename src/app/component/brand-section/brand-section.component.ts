import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-brand-section',
  templateUrl: './brand-section.component.html',
  styleUrls: ['./brand-section.component.css']
})
export class BrandSectionComponent implements OnInit{ 
  public isNight!: boolean
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
    const darkModeValue = localStorage.getItem('dark');
    this.isNight = darkModeValue === 'true';
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

}