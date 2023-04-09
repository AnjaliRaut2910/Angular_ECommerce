import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin=false
  constructor(private seller:SellerService,private router:Router)
  {

  }
  signUp(data:SignUp):void{
    
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.router.navigate(['seller-home'])
      }

    });

  }


  Login(data:SignUp):void{
    console.warn(data)
    
    // this.seller.userSignUp(data).subscribe((result)=>{
    //   console.warn(result)
    //   if(result){
    //     this.router.navigate(['seller-home'])
    //   }

    // });

  }

  openLogin()
{
this.showLogin=true
}
openSignup(){
  this.showLogin=false
}
}
