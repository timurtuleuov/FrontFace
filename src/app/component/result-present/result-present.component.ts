import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PredictionResponse } from 'src/app/interface/prediction-response.interface';
import { NeuralNetworkService } from 'src/app/service/neural-network-service.service';
import { NightmodeService } from 'src/app/service/nightmode.service';

@Component({
  selector: 'app-result-present',
  templateUrl: './result-present.component.html',
  styleUrl: './result-present.component.css'
})
export class ResultPresentComponent implements OnInit{
  phrases: string[] = [
    "Анализируем цифровые следы. Детекция deepfake в процессе.",
  "Ваша защита - наша миссия. Deepfake под контролем.",
  "Ожидайте, мы ищем и разрушаем. Детекция deepfake в действии.",
  "Подготовка к цифровому бою. Анализ deepfake в процессе.",
  "Мы видим, что другие пропускают. Deepfake на нашем радаре.",
  "Распознавание deepfake с высочайшей точностью. Подождите немного.",
  "Алгоритмы на страже вашей безопасности. Deepfake в обработке.",
  "Процесс детекции в работе. Ожидайте результата.",
  "Всегда на шаг впереди. Наша технология против deepfake.",
  "Подготовка к цифровой войне. Мы на стороне правды.",
  "Детекция deepfake - наша специализация. Ожидайте скорых результатов.",
  "Интеллектуальный анализ. Deepfake нашел своего противника.",
  "Алгоритмы против маскировки. Deepfake на обзоре.",
  "Поколение deepfake. Наша система не даст им пройти.",
  "Сканирование диапазона. Детекция deepfake в ходе."
  ];
  currentPhrase: string = '';
  public isNight: boolean = false
  images: any[] = [];
  results: PredictionResponse[] = []
  constructor(private nightMode: NightmodeService, private nnService: NeuralNetworkService, private route: ActivatedRoute){}
  isLoaded: boolean = false
  ngOnInit(): void {
    this.currentPhrase = this.getRandomPhrase();
    setInterval(() => {
      this.currentPhrase = this.getRandomPhrase();
    }, 10000);
    this.route.paramMap.subscribe(params => {
      const state = window.history.state;
      if (state && state.files) {
        this.images = state.files;
        console.log("start of work");
        this.images.forEach(file => {
          console.log(file);
          this.nnService.sendImage(file).subscribe(
            (result) => {
              if (result && typeof result === 'object') {
                this.results.push(result); 
              } else {
                console.error("Result is not an object:", result);
              }
              this.isLoaded = true;
            },
            (error) => console.log(error)
          );
        });
      }
    });
    
    
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

  getRandomPhrase(): string {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

}

