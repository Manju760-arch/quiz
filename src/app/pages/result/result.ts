import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class ResultComponent {

  score = history.state.score;
  total = history.state.total;

  constructor(private router: Router) {}

  retry() {
    this.router.navigate(['/']);
  }
}