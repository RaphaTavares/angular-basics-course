import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Raphael";
  age: number = 30;
  job = "Programador";
  hobbies = ['skate', 'ler', 'xadrez'];
  car = {
    name: 'polo',
    year: '2019'
  }

  constructor(){}
  
  ngOnInit(): void {}
}
