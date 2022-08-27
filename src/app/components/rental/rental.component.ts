import {Component, OnInit} from '@angular/core';
import {Rental} from 'src/app/models/rental/rental';
import {RentalService} from "../../services/rental/rental.service";

@Component({
    selector: 'app-rental',
    templateUrl: './rental.component.html',
    styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

    rentals: Rental[] = [];
    dataLoaded = false;

    constructor(private rentalService: RentalService) { }

    ngOnInit(): void {
        this.getRentals();
    }

    getRentals() {
        this.rentalService.getRentalsDetail().subscribe(respone => {
            this.rentals = respone.data;
            this.dataLoaded = true;
        });
    }

}
