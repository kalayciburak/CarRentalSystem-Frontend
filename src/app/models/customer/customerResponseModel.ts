import {ResponseModel} from "../responseModel";
import {Customer} from "./customer";

export interface CustomerResponseModel extends ResponseModel{
    data : Customer[];
    success : boolean;
    message : string;
}
