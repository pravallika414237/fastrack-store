import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../../service/registration-service.service';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  productDetails:any;
  registerForm!: FormGroup;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder,private service:RegistrationServiceService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      
    });
  }

  apply(){
    // console.log(this.registerForm.value);
     this.submitted=true
    this.service.registerUser(this.registerForm.value).subscribe({
       next(value) {
       console.log(value);
        
      },
    })

    this.service.getProducts().subscribe({

      next: (val) => { this.productDetails = val },
      error: (val) => { console.log(val) },

    }
    )
  }

}
