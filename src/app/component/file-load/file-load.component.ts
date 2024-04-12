import { Component } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';
import {FileItem} from 'src/app/interface/file-item.interface';
import { NeuralNetworkService} from 'src/app/service/neural-network-service.service';
@Component({
  selector: 'app-file-load',
  templateUrl: './file-load.component.html',
  styleUrl: './file-load.component.css'
})
export class FileLoadComponent {
  public isNight: boolean = false;
  
  fileItems: FileItem[] = [];
  files: File[] = []; // Дополнительный массив для хранения файлов

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (this.fileItems.length == 3) {
      console.log("Limit of images is 3");
    }
    if (target.files && target.files.length > 0 && this.fileItems.length < 3) {
      const file = target.files[0];
      console.log(file);
      this.nnService.sendImage(file).subscribe(
            (result) => console.log(result),
            (error) => console.log(error)
          );
        
      
    
      // Добавляем файл в дополнительный массив
      this.files.push(file);

      // Создаем URL для загруженного изображения
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileItem: FileItem = {
          id: this.fileItems.length + 1, // Простой способ генерации ID
          filename: file.name,
          image: e.target.result
        };
        this.fileItems.push(fileItem); // Добавляем объект в массив
      };
      reader.readAsDataURL(file); // Чтение файла как Data URL
    }
  }
  
  constructor(private nightMode: NightmodeService, private nnService: NeuralNetworkService) {}

  ngOnInit(): void {
    this.nightMode.value$.subscribe((newValue) => {
      this.isNight = newValue;
    });
  }

  deleteItem(index: number) {
    // Удаляем файл из дополнительного массива
    this.files.splice(index, 1);
    this.fileItems.splice(index, 1);
  }
  
  uploadImage(){
    console.log("start of work");
    this.files.forEach(file => {
      console.log(file);
      this.nnService.sendImage(file).subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
    });
  }
}

