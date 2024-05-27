import { Component } from '@angular/core';



@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})


export class SubsectionComponent {

  ResearchCard = [
    {header:'Product Research', content: 'Discover profitable products', link: 'Learn More' },
    {header:'Market Research', content: 'Discover profitable Markets', link: 'Learn More' },
    {header:'Keyword Research', content: 'Improve your keyword targeting', link: 'Learn More' },
    {header:'Organizational Research', content: 'Improve your organization targeting', link: 'Learn More' },
    {header:'Analytics ',       content: 'Elevate product performance', link: 'Learn More' },
    
  
  ];



}
