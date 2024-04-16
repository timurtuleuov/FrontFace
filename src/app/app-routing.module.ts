import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/screens/home/home.component';
import { AuthComponent } from './component/auth/auth.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FileLoadComponent } from './component/file-load/file-load.component';
import { ResultPresentComponent } from './component/result-present/result-present.component';
import { HistoryComponent } from './component/history/history.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'load-file', component: FileLoadComponent},
  { path: 'present-result', component: ResultPresentComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
