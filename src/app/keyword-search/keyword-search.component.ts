import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css']
})
export class KeywordSearchComponent {


constructor(  private location: Location){}


  
  goBack(): void {
    this.location.back();
  }
}
