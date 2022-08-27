import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerResponseModel} from "../../models/customer/customerResponseModel";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    apiUrl = 'https://localhost:5001/api/Customers/getCustomerDetails';

    constructor(private httpClient: HttpClient) { }

    getCustomersDetail(): Observable<CustomerResponseModel> {
        return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
    }
}
