import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginNewService {
  usersList:Observable<any[]>;
  user:Observable<any>;

      constructor(private http:HttpClient) { }								
        baseUrl:string = 'http://localhost:3000/users';				
      
      ngOnInit()
      {
        this.getUsers();
      }           
        // Get All Users								
      getUsers() :Observable<User[]> {			
        console.log("inside service " +this.http.get<User[]>(this.baseUrl))	;				
          return this.http.get<User[]>(this.baseUrl);								
        }	                        
       getUserById(id:number):Observable<User>{		
        console.log("UserId"+id);				
        console.log("inside service: :"+ this.http.get<User>(`${this.baseUrl}/${id}`));         
      return this.http.get<User>(`${this.baseUrl}/${id}`);		
 //        return this.http.get<Product>(`${this.baseUrl}/${id}`);
   //   this.products= this.getProducts();        
     //  return this.products.find(p => p.productID == id);
       
      }

     getUserByName(username:string):Observable<User>{		
      console.log("username"+username);				
      console.log("inside service: :"+ this.http.get<User>(`${this.baseUrl}/${username}`));         
    return this.http.get<User>(`${this.baseUrl}/${username}`);		
//        return this.http.get<Product>(`${this.baseUrl}/${id}`);
 //   this.products= this.getProducts();        
   //  return this.products.find(p => p.productID == id);
     
    }

}
