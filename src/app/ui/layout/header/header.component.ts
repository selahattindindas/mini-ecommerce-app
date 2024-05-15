import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../../icons/icons/icons.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterModule, IconsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
}
