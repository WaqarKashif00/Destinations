import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
export interface PeriodicElement {
  name: string;
  position: number;
  priorityNum: number;
  Map: string;
  province:string;
  status:string;
  creater:string;
  Action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', priorityNum: 1.0079, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z',province:'Punjab',status:'Published',creater:'Creator Name' ,Action:'1'},
  { position: 2, name: 'Helium', priorityNum: 4.0026, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z',province:'Punjab',status:'pending',creater:'Creator Name',Action:'1' },
  { position: 3, name: 'Lithium', priorityNum: 6.941, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Published',creater:'Creator Name',Action:'1'},
  { position: 4, name: 'Beryllium', priorityNum: 9.0122, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Published',creater:'Creator Name',Action:'1'},
  { position: 5, name: 'Boron', priorityNum: 10.811, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Approved',creater:'Creator Name',Action:'1'},
  { position: 6, name: 'Carbon', priorityNum: 12.0107, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Approved',creater:'Creator Name',Action:'1'},
  { position: 7, name: 'Nitrogen', priorityNum: 14.0067, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Approved',creater:'Creator Name',Action:'1'},
  { position: 8, name: 'Oxygen', priorityNum: 15.9994, Map: 'https://www.google.com/maps/@31.5077711,74.3470166,15z' ,province:'Punjab',status:'Published',creater:'Creator Name',Action:'1'},
  
];

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'priorityNum', 'Map','province','status','creatorName','Action'];
  dataSource = ELEMENT_DATA;
}
