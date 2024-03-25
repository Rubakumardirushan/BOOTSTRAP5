import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.css'
})
export class CallbackComponent implements OnInit{
  constructor(private route: ActivatedRoute, private http:HttpClient) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        // Call the AuthService to handle the GitHub callback.
       
      } else {
        console.error('No code parameter received.');
      }
    });
  }






}
