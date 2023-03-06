import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  user1:boolean=true;
  // product: Product|undefined;
  loggeduser:any;
  product: any;
  constructor(
    private service: RegistrationServiceService,
    private route: ActivatedRoute,
    private router: Router
    //  private cartService: CartService
  ) { }

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
console.log(productIdFromRoute);
    // Find the product that correspond with the id provided in route.
    this.service.getProductsById(productIdFromRoute).subscribe({

      next: (val) => { this.product = val },
      error: (val) => { console.log(val) },

    }
    )
    //  products.find(product => product.id === productIdFromRoute);
    console.log(this.product);
    this.loggeduser=sessionStorage.getItem("loggedname");
    if(this.loggeduser != null){
            this.user1=true;
           
    }
    else{
      alert("please login! ");
      this.router.navigate(['/login'])
           this.user1=false;
    }
  }

  addToCart(product: any) {
    this.service.addToCart(product.productId,this.loggeduser);
    window.alert('Your product has been added to the cart!');

  }
}