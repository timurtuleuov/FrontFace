import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-result-present',
  templateUrl: './result-present.component.html',
  styleUrl: './result-present.component.css'
})
export class ResultPresentComponent implements OnInit{
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

}

