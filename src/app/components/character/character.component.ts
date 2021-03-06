import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'], 
})
export class CharacterComponent implements OnInit {

  @Input() character!: ICharacter;

  constructor() { }

  ngOnInit(): void { }


}
