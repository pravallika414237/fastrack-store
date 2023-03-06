import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loggeduser:any;
 loggedId:any;
  public product:any =[];
  public grandTotal !:number;
  constructor(private service: RegistrationServiceService, private router: Router) { }

  ngOnInit(  ): void {
    this.loggeduser=sessionStorage.getItem("loggedname");
   // this.loggedId =sessionStorage.getItem("userId");
    if(this.loggeduser != null){
      this.service.getCartById(this.loggeduser).subscribe({

        next: (val) => { this.product = val },
        error: (val) => { console.log(val) },
  
      }
      )
           
    }
    else{
      alert("please login! ");
      this.router.navigate(['/login'])
    }
    
  }
  emptycart(){

  }
  removeItem(){

  }

}
