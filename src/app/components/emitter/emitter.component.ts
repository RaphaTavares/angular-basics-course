import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit{
  
  constructor(){}

  ngOnInit(): void {}

  myNumber!: number;

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
