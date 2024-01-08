import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 


  carditem: Product[] = [];
  private carditemcount = new BehaviorSubject<number>(0);

  realcardcount = this.carditemcount.asObservable();


  constructor() { }

  addToCard(product: Product) {

    this.carditem.push(product);
    this.carditemcount.next(this.carditem.length);

  }

  //*****/

  getcarditem(): Product[] {
    return this.carditem;
  }

  ///**** */

  removeitem(id: number) {
    const index = this.carditem.findIndex((item => item.id === id));
    this.carditem.splice(index, 1);
    this.carditemcount.next(this.carditem.length);

  }

}
