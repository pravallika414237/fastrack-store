import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-sellerproducts',
  templateUrl: './sellerproducts.component.html',
  styleUrls: ['./sellerproducts.component.css']
})
export class SellerproductsComponent implements OnInit {
  registerForm!: FormGroup;
  updateFormView: boolean = false;
  productDetails: any
  id:any;
  constructor(private service: RegistrationServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({

      next: (val) => { this.productDetails = val },
      error: (val) => { console.log(val) },

    }
    )
    
  }
    update(value: any) {
      this.updateFormView=true;
      this.registerForm.setValue({
        productName: value.productName,
        description: value.description,
        image: value.image,
        price: value.price
      });
      this.id = value.Productid;
      
      //this.updateFormView = true
    }
    delete(id: number) {
      this.service.deleteStudent(id).subscribe({
        next: (val) => { this.productDetails = val },
        error: (val) => { console.log(val) },
  
      })
      alert("successfully deleted the successfully!")
    }
    apply(){

      this.service.update(this.id,this.registerForm.value).subscribe({
        next(value) {
        console.log(value);
         
       },
     })
    }
  }
