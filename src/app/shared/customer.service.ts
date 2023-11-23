import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoanDetails } from  './loan-details'
import { BehaviorSubject, Observable } from 'rxjs';
import{CustomerDetails} from './customer-details'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formCustomerData:CustomerDetails=new CustomerDetails();   //for add and edit
  

 
  loans:LoanDetails[]
  private refreshListSource=new BehaviorSubject<boolean>(false);
  constructor(private httpClient:HttpClient) { }
  getLoanNames(){
    //http://localhost:8085/api/employees
    this.httpClient.get(environment.apiUrl +'/api/loans')
  
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.loans=response as LoanDetails[]
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    )
  }
   //post
   insertCustomer(cust:CustomerDetails):Observable<any>{
    return this.httpClient.post(environment.apiUrl +'/api/customers',cust);

  }
  //refresh
  refreshList$=this.refreshListSource.asObservable();

  //trigger
  triggerRefreshList(){
    this.refreshListSource.next(true);
  }
}
