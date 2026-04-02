import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions: any = {

    python: [
      {
        question: 'Which keyword is used to define a function in Python?',
        options: ['def', 'function', 'fun', 'define'],
        answer: 'def'
      },
      {
        question: 'Which data type is immutable?',
        options: ['list', 'set', 'dictionary', 'tuple'],
        answer: 'tuple'
      },
      {
        question: 'What is the output of print(type(5))?',
        options: ['int', 'number', 'integer', 'float'],
        answer: 'int'
      },
      {
        question: 'Which library is used for data analysis?',
        options: ['NumPy', 'Pandas', 'Matplotlib', 'All'],
        answer: 'All'
      },
      {
        question: 'What does PEP stand for?',
        options: ['Python Enhancement Proposal', 'Programming Easy Python', 'Python Event Process', 'None'],
        answer: 'Python Enhancement Proposal'
      }
    ],

    cpp: [
      {
        question: 'Who developed C++?',
        options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Guido'],
        answer: 'Bjarne Stroustrup'
      },
      {
        question: 'Which concept allows same function name with different parameters?',
        options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
        answer: 'Polymorphism'
      },
      {
        question: 'Which symbol is used for pointer?',
        options: ['*', '&', '#', '%'],
        answer: '*'
      },
      {
        question: 'Which keyword is used to create object?',
        options: ['new', 'create', 'object', 'init'],
        answer: 'new'
      },
      {
        question: 'Which OOP concept hides data?',
        options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Function'],
        answer: 'Encapsulation'
      }
    ],

    javascript: [
      {
        question: 'Which keyword declares a variable?',
        options: ['var', 'let', 'const', 'All'],
        answer: 'All'
      },
      {
        question: 'JS is a ___ language?',
        options: ['Compiled', 'Interpreted', 'Both', 'None'],
        answer: 'Interpreted'
      },
      {
        question: 'Which method converts JSON to object?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'parseJSON()'],
        answer: 'JSON.parse()'
      },
      {
        question: 'Which company developed JS?',
        options: ['Google', 'Microsoft', 'Netscape', 'Amazon'],
        answer: 'Netscape'
      },
      {
        question: 'Which symbol is used for comments?',
        options: ['//', '#', '<!-- -->', '**'],
        answer: '//'
      }
    ],

    java: [
      {
        question: 'Java is ___ language?',
        options: ['Platform dependent', 'Platform independent', 'Machine dependent', 'None'],
        answer: 'Platform independent'
      },
      {
        question: 'Which keyword is used for inheritance?',
        options: ['extends', 'implements', 'inherits', 'super'],
        answer: 'extends'
      },
      {
        question: 'JVM stands for?',
        options: ['Java Virtual Machine', 'Java Variable Machine', 'Java Verified Machine', 'None'],
        answer: 'Java Virtual Machine'
      },
      {
        question: 'Which method is entry point?',
        options: ['main()', 'start()', 'run()', 'init()'],
        answer: 'main()'
      },
      {
        question: 'Which keyword is used to prevent inheritance?',
        options: ['static', 'final', 'private', 'protected'],
        answer: 'final'
      }
    ],

    html: [
      {
        question: 'HTML stands for?',
        options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tool Multi Language', 'None'],
        answer: 'Hyper Text Markup Language'
      },
      {
        question: 'Which tag creates hyperlink?',
        options: ['<a>', '<link>', '<href>', '<h>'],
        answer: '<a>'
      },
      {
        question: 'Which tag is used for image?',
        options: ['<img>', '<image>', '<pic>', '<src>'],
        answer: '<img>'
      },
      {
        question: 'Which tag is used for heading?',
        options: ['<h1>', '<p>', '<div>', '<span>'],
        answer: '<h1>'
      },
      {
        question: 'HTML is?',
        options: ['Programming Language', 'Markup Language', 'Scripting Language', 'None'],
        answer: 'Markup Language'
      }
    ],

    dbms: [
      {
        question: 'DBMS stands for?',
        options: ['Database Management System', 'Data Backup System', 'Data Basic System', 'None'],
        answer: 'Database Management System'
      },
      {
        question: 'Which language is used in DBMS?',
        options: ['SQL', 'HTML', 'CSS', 'JS'],
        answer: 'SQL'
      },
      {
        question: 'Primary key is?',
        options: ['Unique', 'Duplicate', 'Optional', 'None'],
        answer: 'Unique'
      },
      {
        question: 'Which normal form removes redundancy?',
        options: ['1NF', '2NF', '3NF', 'All'],
        answer: 'All'
      },
      {
        question: 'Which command is used to retrieve data?',
        options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'],
        answer: 'SELECT'
      }
    ]

  };

  getQuestions(subject: string) {
    return this.questions[subject] || [];
  }
}