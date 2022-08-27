import {ResponseModel} from "../responseModel";
import {Rental} from "./rental";

export interface RentalResponseModel extends ResponseModel{
    data: Rental[];
    success: boolean;
    message: string;
}
