import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitool',
  templateUrl: './mitool.component.html',
  styleUrls: ['./mitool.component.css']
})
export class MIToolComponent implements OnInit {
ngOnInit(): void {

  
}
selectedCountry!: any;

eventHandler($event: any) {
  this.selectedCountry = $event;
  
  
}
}
