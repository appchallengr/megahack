import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {

  extrato:boolean = false;
  pontuacao:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showExtrato(){
    this.extrato = true;
  }

  showPontuacao(){
    this.pontuacao = true;
  }

  hideExtrato(){
    this.extrato = false;
  }

  hidePontuacao(){
    this.pontuacao = false;
  }

}
