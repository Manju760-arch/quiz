import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.html',
  styleUrl: './subjects.css'
})
export class SubjectsComponent {

  subjects = ['python', 'cpp', 'javascript', 'java', 'html', 'dbms'];

  constructor(private router: Router) {}

  startQuiz(subject: string) {
    this.router.navigate(['/quiz', subject]);
  }
}