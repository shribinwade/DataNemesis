import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ECommerceSitesService } from '../e-commerce-sites.service';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css'],
})
export class ProductServiceComponent implements OnChanges {



  constructor(private ecommerceSites: ECommerceSitesService){}

  @Input() country!: string;

  isVisible: boolean = false;

  

  filteredSites!: { id:number;name: string; src: string }[];

  ngOnChanges(changes: SimpleChanges): void {
    this.filterSitesByCountry();
  }

  filterSitesByCountry() {
    const countryData = this.ecommerceSites.eCommerceSites.find(
      (c) => c.country === this.country
    );
    this.filteredSites = countryData ? countryData.sites : [];
  }
}
