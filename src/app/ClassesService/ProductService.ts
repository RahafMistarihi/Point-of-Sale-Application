
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


const headers= new HttpHeaders()
    .set('x-rapidapi-host', 'burgers1.p.rapidapi.com')
    .set('x-rapidapi-key', 'afc8a59d83msh929e2871f48b217p143589jsnd4d3e5f1a9dc');


@Injectable()
export class ProductService {

    constructor(private HttpCli : HttpClient){}
    
    GetProduct() : Observable<any>{
        return this.HttpCli.get('https://burgers1.p.rapidapi.com/burgers' , { 'headers': headers });
    }

}