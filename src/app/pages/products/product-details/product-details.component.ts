import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product_id!: string;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { 
    this.route.params.subscribe((res: any) => this.product_id = res.id)
  }

  ngOnInit(): void {
  
    this.http.get<any>(environment.baseUrl + `products/${this.product_id}`)
    .subscribe(
      res => {
        this.product = res;
      },
      err => console.log(err)
    )
  
  }

}
