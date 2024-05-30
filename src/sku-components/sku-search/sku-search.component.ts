import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ECommerceSitesService } from '../../app/e-commerce-sites.service';
@Component({
  selector: 'app-sku-search',
  templateUrl: './sku-search.component.html',
  styleUrls: ['./sku-search.component.css']
})
export class SKUSearchComponent implements OnInit {


  productSiteName!:any;
  productSiteImgSrc!:any;

  constructor(private activatedRoute:ActivatedRoute,private location: Location,private ecommarcesites:ECommerceSitesService) {}
  ngOnInit(): void {
    
    this.productSiteName=this.activatedRoute.snapshot.paramMap.get('name');
    this.productSiteImgSrc=this.getImgSrc(this.ecommarcesites,this.productSiteName); 
    console.log(this.productSiteImgSrc);
    console.log(this.productSiteName);

  }
   getImgSrc(ecommarcesites: ECommerceSitesService, productSiteName: any) {
    let imgsrc!:String;
    for(let site of ecommarcesites.eCommerceSites){
          for(let sites of site.sites){
                   if(sites.name==productSiteName){
                    return sites.src;
                   }
          }
    }
    return "null";
  }

  goBack(): void {
    this.location.back();
  }
}
