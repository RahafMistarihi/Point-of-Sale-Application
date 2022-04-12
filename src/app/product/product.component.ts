import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../Classes/product';
import { ProductService } from '../ClassesService/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {


  constructor(private ProductService:ProductService , Product:Product) {}


  title = 'POSApp';
  liProducts!:Product[];
  //ProductID!:number;
  ProductID:any;
  ProductName:any;
  ProductRestaurant:any;
  ProductWeb:any;
  ProductDescription:any;

  Quantity!:any;
  rowName:any;

  TextAmount:any;
  liTable!:Product[];


  ngOnInit(): void {
    this.GetProduct();
    this.ProductName = "-";
    this.ProductID = 0;
    this.Quantity = 0;
    this.ProductDescription = 0;
    this.TextAmount = 0;
  }


  GetProduct(){ 
    this.ProductService.GetProduct().subscribe(
      data => {
        this.liProducts = data;
        console.log(this.liProducts);
      }
    )
  }

  
  ProductInfo( ID:number, Name:string, Restaurant:string, Web:string, Description:string, rowName:HTMLInputElement){

    this.ProductID = ID;
    this.ProductName = Name;
    this.ProductRestaurant = Restaurant;
    this.ProductWeb = Web;
    this.ProductDescription = Description;
    this.rowName = rowName.value;

    if(Name == this.rowName){
      this.Quantity += 1;
    }
    else{
      this.Quantity = 1;
    }

    this.TextAmount += 1;
    
  }

}
