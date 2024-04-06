import { Component, OnInit } from '@angular/core';
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
  images: string[] = ['../../../assets/img/logo.png', '../../../assets/img/logo.png', '../../../assets/img/logo.png']
  constructor(private nightMode: NightmodeService){}
  ngOnInit(): void {
    this.currentPhrase = this.getRandomPhrase();
    setInterval(() => {
      this.currentPhrase = this.getRandomPhrase();
    }, 10000);
    
    
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }

  getRandomPhrase(): string {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

}

