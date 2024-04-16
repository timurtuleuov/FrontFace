import { Component, OnInit } from '@angular/core';
import { NeuralNetworkService } from 'src/app/service/neural-network-service.service';
import { NightmodeService } from 'src/app/service/nightmode.service';
import { Response } from 'src/app/interface/response.interface';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  isNight: boolean = false
  data: Response[] = []
  constructor(private nightMode: NightmodeService, private nnService: NeuralNetworkService){}
  ngOnInit(): void {
    this.nnService.getHistory().subscribe(
      (result) => {
        this.data = result
        this.data = this.data.reverse()
      },
      (error) => console.log(error) 
    )
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }
}
