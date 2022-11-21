import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product_form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.product_form = this.fb.group({
      title: [undefined, Validators.required],
      price: [undefined, Validators.required],
      description: [undefined, Validators.required],
      image: [undefined, Validators.required],
      category: [undefined, Validators.required],
    })

  }

  // FOR VALIDATION
  get title() { return this.product_form.get('title') }
  get price() { return this.product_form.get('price') }
  get description() { return this.product_form.get('description') }
  get image() { return this.product_form.get('image') }
  get category() { return this.product_form.get('category') }
  form_submitted: boolean = false;



  onSubmit() {
    this.form_submitted = true;

    if (this.product_form.valid) {

      this.http.post(environment.baseUrl + 'products', this.product_form.value)
      .subscribe(
        (res: any) => {
          confirm('Product added successfully!');
          this.product_form.reset();          
        },
        err => console.log(err)
      )

      return
    }

  }

}