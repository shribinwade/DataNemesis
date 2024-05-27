import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.css']
})
export class ProductServiceComponent implements OnChanges {
   
    @Input() country!:string;
             
    isVisible: boolean= false;

    eCommerceSites = [
        {
          country: 'India',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Myntra', src: '/assets/logo.png' },
            { name: 'TataCliq', src: '/assets/logo.png' },
            { name: 'Croma', src: '/assets/logo.png' },
            { name: 'RelianceDigital', src: '/assets/logo.png' },
             { name: 'Vijay Sales', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'USA',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'BigDeals', src: '/assets/logo.png' },
            { name: 'BestBuy', src: '/assets/logo.png' },
            { name: 'PcHub', src: '/assets/logo.png' },
            { name: 'Newgg', src: '/assets/logo.png' },
            { name: 'LinusTech', src: '/assets/logo.png' },
             { name: '1Dollor', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'France',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
             { name: 'Flipkart', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'Germany',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'BigDeals', src: '/assets/logo.png' },
            { name: 'BestBuy', src: '/assets/logo.png' },
            { name: 'PcHub', src: '/assets/logo.png' },
            { name: 'Newgg', src: '/assets/logo.png' },
            { name: 'LinusTech', src: '/assets/logo.png' },
             { name: '1Dollor', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'Europe',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
             { name: 'Flipkart', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'Denmark',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'BigDeals', src: '/assets/logo.png' },
            { name: 'BestBuy', src: '/assets/logo.png' },
            { name: 'PcHub', src: '/assets/logo.png' },
            { name: 'Newgg', src: '/assets/logo.png' },
            { name: 'LinusTech', src: '/assets/logo.png' },
             { name: '1Dollor', src: '/assets/logo.png' }
          ]
        
        },
        {
          country: 'Spain',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
            { name: 'Flipkart', src: '/assets/logo.png' },
             { name: 'Flipkart', src: '/assets/logo.png' }
          ]
        },
        {
          country: 'UNITED KINGDOM',
          sites: [
            { name: 'Amazon', src: '/assets/logo.png' },
            { name: 'BigDeals', src: '/assets/logo.png' },
            { name: 'BestBuy', src: '/assets/logo.png' },
            { name: 'PcHub', src: '/assets/logo.png' },
            { name: 'Newgg', src: '/assets/logo.png' },
            { name: 'LinusTech', src: '/assets/logo.png' },
             { name: '1Dollor', src: '/assets/logo.png' }
          ]
        }
      ];

      filteredSites!: { name: string, src: string }[];

      ngOnChanges(changes: SimpleChanges): void {
        this.filterSitesByCountry();
    }

    filterSitesByCountry() {
        const countryData = this.eCommerceSites.find(c => c.country === this.country);
        this.filteredSites = countryData ? countryData.sites : [];
      }


}
