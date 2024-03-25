import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  githublink:string="";
  constructor(private http: HttpClient) {}
ngOnInit(): void {
    
  this.http.get('http://127.0.0.1:8000/api/auth/redirect').subscribe((response: any) => 
  {console.log(response.authorization_url);
    this.githublink = response.authorization_url;
  });
}
dirushan(){
  this.http.get('http://127.0.0.1:8000/api/auth/callback').subscribe((result: any) =>{
    
  debugger;
  console.log(result)
  debugger;});
  
}

}
