import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ColorResponseModel} from "../../models/color/colorResponseModel";

@Injectable({
    providedIn: 'root'
})
export class ColorService {
    apiUrl = 'https://localhost:5001/api/Colors/getAll';

    constructor(private httpClient:HttpClient) { }

    getColors() : Observable<ColorResponseModel>{
        return this.httpClient.get<ColorResponseModel>(this.apiUrl);
    }
}
