import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento-component',
  templateUrl: './pensamento-component.component.html',
  styleUrls: ['./pensamento-component.component.css']
})
export class PensamentoComponentComponent implements OnInit {

  @Input() pensamento : Pensamento = {
    id : 0,
    conteudo: 'conteudo',
    autoria: 'dev',
    modelo: 'modelo3',
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento() : string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
