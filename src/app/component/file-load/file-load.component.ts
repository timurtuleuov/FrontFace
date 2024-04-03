import { Component } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-file-load',
  templateUrl: './file-load.component.html',
  styleUrl: './file-load.component.css'
})
export class FileLoadComponent {
  public isNight: boolean = false
  
  files: string[] = [] 
  images: string[] = [];


  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        console.log(target.files[0].name);
        this.files.push(target.files[0].name)

        const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push(e.target.result); // Добавляем URL в массив изображений
      };
      reader.readAsDataURL(target.files[0]); // Чтение файла как Data URL
    }
    
}
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

  
}
