import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
    declarations: [
        AppComponent,
        NaviComponent,
        FooterComponent,
        CarComponent,
        ColorComponent,
        BrandComponent,
        RentalComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
