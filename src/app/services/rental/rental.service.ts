import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalResponseModel} from "../../models/rental/RentalResponseModel";

@Injectable({
    providedIn: 'root'
})
export class RentalService {
    apiUrl = 'https://localhost:5001/api/Rentals/getRentalDetails';

    constructor(private httpClient: HttpClient) { }

    getRentalsDetail(): Observable<RentalResponseModel> {
        return this.httpClient.get<RentalResponseModel>(this.apiUrl);
    }
}
