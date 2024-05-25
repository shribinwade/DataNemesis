import { Component } from '@angular/core';

@Component({
  selector: 'app-main-logos',
  templateUrl: './main-logos.component.html',
  styleUrls: ['./main-logos.component.css']
})
export class MainLogosComponent {

  logos = [
    { src: 'path/to/logo1.png', platform: 'Walmart' },
    { src: 'path/to/logo2.png', platform: 'Amazon' },
    { src: 'path/to/logo3.png', platform: 'Flipkart' },
    { src: 'path/to/logo4.png', platform: 'Ebay' },
    { src: 'path/to/logo5.png', platform: 'Target' },
    // Add more logos as needed
  ];
}
