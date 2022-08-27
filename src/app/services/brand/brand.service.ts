import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BrandResponseModel} from "../../models/brand/brandResponseModel";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    apiUrl = 'https://localhost:5001/api/Brands/getAll';

    constructor(private httpClient: HttpClient) { }

    getBrands(): Observable<BrandResponseModel> {
        return this.httpClient.get<BrandResponseModel>(this.apiUrl);
    }
}
