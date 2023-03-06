import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 username:any="user";
 //searchKey:string="";
 public totalItem: number =0;
  public searchTerm !:string;
  constructor(private service: RegistrationServiceService) { }

  ngOnInit(): void 
  {
     this.username=sessionStorage.getItem("loggedname");
  }
logout()
{
  sessionStorage.clear();
  this.username=sessionStorage.getItem("loggedname");
  alert("logged out successfully"); 
}
search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.service.search.next(this.searchTerm);
}
}
