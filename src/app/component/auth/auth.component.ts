import { Component, OnInit } from '@angular/core';
import { NightmodeService } from 'src/app/service/nightmode.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{ 
  registrationForm!: FormGroup;
  public isNight!: boolean
  
  constructor(private nightMode: NightmodeService, private fb: FormBuilder, private authService: AuthService,
    private router: Router, private route: ActivatedRoute, private cookieService: CookieService){}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    const darkModeValue = localStorage.getItem('dark');
    this.isNight = darkModeValue === 'true';
  this.nightMode.value$.subscribe((newValue) => {
    this.isNight = newValue
  })
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value;
      this.authService.signUp(user).subscribe(
        (result) => {
          
          
          console.log('Registration successful', result);
          this.cookieService.set('token', result.token);
          this.cookieService.set('user-name', user.username);
          this.cookieService.set('user-password', user.password);
          this.cookieService.set('user-email', user.email);
          this.router.navigate(['/']);
        },
        (error) => {

          console.error('Registration failed', error);
        }
      );


    }
  }
}