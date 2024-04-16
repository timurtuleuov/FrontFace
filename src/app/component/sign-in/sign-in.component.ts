import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { TokenDecode } from 'src/app/interface/token-decode.interface';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/service/auth.service';
import { NightmodeService } from 'src/app/service/nightmode.service';
// import {
//   SocialAuthService,
//   GoogleLoginProvider,
//   SocialUser,
// } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{ 
  registrationForm!: FormGroup;
  myUser!: User;
  // socialUser!: SocialUser;
  // isLoggedin?: boolean;
  public isNight: boolean = false
  name: any;
  
  constructor(private nightMode: NightmodeService, private fb: FormBuilder, 
    private auth: AuthService, private cookieService: CookieService, private router: Router,
     private authService: AuthService){}
  ngOnInit(): void {
    this.name = this.cookieService.get("user-name")
    if (this.name) {
      this.router.navigate(['/']);
    }
    this.nightMode.value$.subscribe((newValue) => {
      this.isNight = newValue
    }

)
  this.registrationForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
 
  }
  loginWithGoogle(): any{
    this.authService.loginWithGoogle().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    );
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then(() => this.router.navigate(['/']));
  }

  onSubmit() {
    this.auth.getToken(this.registrationForm.value.username, this.registrationForm.value.password).subscribe(
      (result) => {
        console.log("You successfuly loged in!!!")
        const userData = jwtDecode<TokenDecode>(result.token);
        console.log(userData)
          this.cookieService.set('user-id', userData.id.toString())
          this.cookieService.set('token', result.token);
        
          this.cookieService.set('user-name', userData.sub);
          this.cookieService.set('user-email', userData.email);
          
          window.location.reload();
          
      }
      
    )
  }
}
