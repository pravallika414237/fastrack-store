import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  //public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  registerUser(user1:any):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8082/api/registerUser', user1, { headers: options });
  }

  getProducts(){
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         
         'Content-Type': 'application/json'
      })
  }
    return this.http.get('http://localhost:8082/api/getAllProducts',httpOptions);
}
//not correct....!
addToCart(productId:number,userId:number):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/addtoCart/',productId);


}
  getProductsById(id : number){
    const httpOptions = {
      headers: new HttpHeaders(
      { 
         'Content-Type': 'application/json'
      })
  }
    return this.http.get('http://localhost:8082/api/getProduct/'+id);
      
  }

  deleteStudent(productid : number){
    return this.http.delete('http://localhost:8082/api/deleteProduct/'+productid);
  }
  update(productid :number,product :any){
    console.log(productid);
    
    return this.http.put('http://localhost:8082/api/updateProduct/'+productid,product);
}
login(user1:any):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/login', user1);
}
getCartById(id : number){
  const httpOptions = {
    headers: new HttpHeaders(
    { 
       'Content-Type': 'application/json'
    })
}
  return this.http.get('http://localhost:8082/api/getCart/'+id);
    
}

adminlogin(user1:any):Observable<any>{
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8082/api/adminlogin', user1);
}
}

