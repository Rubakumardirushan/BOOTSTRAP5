import { Routes } from '@angular/router';
import { LoginComponent } from './GitHub/login/login.component';
import { CallbackComponent } from './GitHub/callback/callback.component';
export const routes: Routes = [
   {'path':'', component: LoginComponent},
   {
    'path': 'http://127.0.0.1:8000/auth/callback', component: CallbackComponent },
   
];
