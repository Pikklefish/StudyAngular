import {Component} from '@angular/core';
import {Customer} from "../Models/customer"
@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent{
    Customers:Array<Customer>;
    constructor(){
        this.Customers = new Array<Customer>();
        this.Customers.push(new Customer("Sukesh","Marla"));
        this.Customers.push(new Customer("Just","Compile"));
        this.Customers.push(new Customer("Ram","Lakhan"));
        console.log(this.Customers);
    }

    Save(){
        this.Customers.push(new Customer("Karan", "Arjun"));

    }
}