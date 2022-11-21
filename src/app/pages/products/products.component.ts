import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<any>(environment.baseUrl + 'products?limit=10')
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    )
  }

}
