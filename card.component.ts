import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  productscard!: Product[];


  constructor(

    private Cservice: CardService) { }


  ngOnInit(): void {

    this.productscard = this.Cservice.getcarditem();

  }



  remove(id: number) {

    this.Cservice.removeitem(id);
  }



}
