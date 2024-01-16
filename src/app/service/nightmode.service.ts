import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NightmodeService implements OnInit{
  public darkMode: boolean = false;
  private valueSubject = new BehaviorSubject<boolean>(false);
  value$ = this.valueSubject.asObservable();

  setValue(newValue: boolean): void {
    this.valueSubject.next(newValue);
  }
  toggleMode(){
    this.darkMode = !this.darkMode;
    this.setValue(this.darkMode)
    localStorage.setItem('dark', JSON.stringify(this.darkMode))
  }
  constructor() {
    localStorage.setItem('dark', JSON.stringify(this.darkMode))
   }
  ngOnInit(): void {
  }
}
