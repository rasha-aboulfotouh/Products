import { Component } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';

  carditemcount!:number;

  constructor(private cardservice: CardService) { }

  ngOnInit(): void {
    this.cardservice.realcardcount.subscribe((count)=>{ this.carditemcount = count });
  }
}
