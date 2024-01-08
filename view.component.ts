import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;

  product!: Observable<Product>;


  constructor(
    private route: ActivatedRoute,
    private pserve: ProductService
  ) { }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);

    this.product = this.pserve.getProductById(this.id );
  }



}
