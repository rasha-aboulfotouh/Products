import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CardService } from '../card.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products!: Product[];      // متغير  / /


  constructor(
    private pservice: ProductService,
    private Cservice: CardService

  ) { }


  ngOnInit(): void {
    this.pservice.getProduct().subscribe((data: Product[]) => { this.products = data });
  }


  addToCard(product: Product) {

    this.Cservice.addToCard(product);
    console.log(product);
  }


}
