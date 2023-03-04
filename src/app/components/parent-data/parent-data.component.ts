import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})

// as variaveis recebidas via "props" tem que ou ser inicializadas com valor vazio,
// ou adicionar "strictPropertyInitialization": false no tsconfig.json, config inclusive
// que não está funcionando, ou então adicionar ! após o nome da variável.
export class ParentDataComponent {
  @Input() name!: string;

}
