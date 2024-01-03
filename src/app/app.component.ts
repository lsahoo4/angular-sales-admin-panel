import { Component } from '@angular/core';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgChartsModule,
     NavbarComponent,
     MatInputModule,
     MatButtonModule,
     MatRadioModule,
     MatCardModule,
     ReactiveFormsModule,
     FormsModule,
     CommonModule,
     MatIconModule,
     RouterLink,
     MatIconModule,
     RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-admin-panel';
}
