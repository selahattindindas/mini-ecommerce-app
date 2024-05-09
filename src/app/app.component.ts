import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products= [
    {name:"Selahattin", price:30, discontinued:true},
    {name:"Mehmet", price:30, discontinued:false},
    {name:"Deneme", price:30, discontinued:true},
  ]
  
}
