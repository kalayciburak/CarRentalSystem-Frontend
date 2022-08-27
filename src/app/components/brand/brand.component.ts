import {Component, OnInit} from '@angular/core';
import {Car} from "../../models/car/car";
import {Brand} from "../../models/brand/brand";
import {BrandService} from "../../services/brand/brand.service";

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
    brands: Brand[] = [];
    dataLoaded = false;

    constructor(private brandService:BrandService) { }

    ngOnInit(): void {
        this.getBrands();
    }

    getBrands() {
        this.brandService.getBrands().subscribe(response => {
            this.brands = response.data;
            this.dataLoaded = true;
        });
    }
}
