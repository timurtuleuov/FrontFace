import { Component } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-file-load',
  templateUrl: './file-load.component.html',
  styleUrl: './file-load.component.css'
})
export class FileLoadComponent {
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
    console.log(this.isNight)
  })
  }
}
