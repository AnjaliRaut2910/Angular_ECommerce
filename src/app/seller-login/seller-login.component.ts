import { Component, ViewChild } from '@angular/core';
import { FormGroupName, NgForm } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  // @ViewChild('sellerLogin') sellerLogin: NgForm;
 ngForm:FormGroup = new FormGroup({});  
 get: any;

 onSubmit(){

  if (this.ngForm.valid) {
    this.get = this.getData.getUserData().subscribe((data) =>{
      this.get = data;
      console.log(this.get, "get data");
      
    })
    console.log("BE", this.get);
    console.log(this.ngForm.value);
    // submit form data to server or perform login action
  }
 }

constructor(private fb: FormBuilder, private getData:SellerService) {}

ngOnInit() {
  this.ngForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

}
