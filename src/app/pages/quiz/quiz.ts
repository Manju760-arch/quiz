import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class QuizComponent implements OnInit {

  questions: any[] = [];
  current = 0;
  score = 0;
  selected = '';
  timer = 30;

  interval: any;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit() {
    const subject = this.route.snapshot.params['subject'];
    this.questions = this.quizService.getQuestions(subject);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.next();
      }
    }, 1000);
  }

  select(option: string) {
    this.selected = option;
  }

  next() {
    if (this.selected === this.questions[this.current].answer) {
      this.score++;
    }

    this.selected = '';
    this.current++;
    this.timer = 30;

    if (this.current >= this.questions.length) {
      clearInterval(this.interval);
      this.router.navigate(['/result'], {
        state: { score: this.score, total: this.questions.length }
      });
    }
  }
}