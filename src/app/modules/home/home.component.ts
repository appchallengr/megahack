import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/servicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  extrato:boolean = false;
  data:any[] = [];

  constructor(private servicos: ServicosService) { }

  ngOnInit(): void {
    this.servicos.getCategories().subscribe(data => {
      data.map(e => {
        this.data.push(e.payload.doc.data());
        console.log(e.payload.doc.data());
      })
    });
  }

  showExtrato(){
    this.extrato = true;
  }

  hideExtrato(){
    this.extrato = false;
  }

}
