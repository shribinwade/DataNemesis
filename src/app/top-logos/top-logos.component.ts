import { Component } from '@angular/core';


@Component({
  selector: 'app-top-logos',
  templateUrl: './top-logos.component.html',
  styleUrls: ['./top-logos.component.css']
})
export class TopLogosComponent {
  logos = [
    { src: 'path/to/logo1.png', label: 'India' },
    { src: 'path/to/logo2.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    { src: 'path/to/logo3.png', label: 'India' },
    // Add more logos as needed
  ];

}
