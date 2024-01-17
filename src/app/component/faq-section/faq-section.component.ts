import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent implements OnInit{ 
  public isNight: boolean = false
  
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
    console.log(this.isNight)
  })
  }

  accordionItems = [
    { id: 0, isOpen: false },
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
    // Добавьте другие блоки при необходимости
  ];

  toggleAccordion(itemId: number) {
    const item = this.accordionItems.find(i => i.id === itemId);
    if (item) {
      item.isOpen = !item.isOpen;
    }
  }
}
