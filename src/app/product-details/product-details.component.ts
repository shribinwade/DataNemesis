import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceComponent } from '../product-service/product-service.component';
import { ECommerceSitesService } from '../e-commerce-sites.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productSite!:string;
  productSiteName!:any
  productSiteImgSrc!:String;
  
  constructor(private activatedRoute:ActivatedRoute, private location: Location, private ecommarcesites:ECommerceSitesService  ){

  }
  ngOnInit(): void {
    this.productId=this.activatedRoute.snapshot.paramMap.get('id');
    this.productSiteName=this.activatedRoute.snapshot.paramMap.get('name');
    this.productSiteImgSrc=getImgSrc(this.ecommarcesites,this.productId);                     
    console.log(this.productSite);
    console.log(this.productSiteImgSrc);
    
  }
  productId:any;

  goBack(): void {
    this.location.back();
  }
}




function getImgSrc(ecommarcesites: ECommerceSitesService, productId: any) {
  let imgsrc!:String;
  for(let site of ecommarcesites.eCommerceSites){
        for(let sites of site.sites){
                 if(sites.id==productId){
                  return sites.src;
                 }
        }
  }
  return "null";
}

