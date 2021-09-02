import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
    cards=[{
      id:1,
      NumUsers:500,
      header:'Total Users',
      src:"./assets/threedBox.svg"
    },{
      id:2,
      NumUsers:415,
      header:'Active Users',
      src:"./assets/Setting.svg"
      
    },{
      id:3,
      NumUsers:15,
      header:'Inactive Users',
      src:"./assets/threedBox.svg"
    },{
      id:4,
      NumUsers:10,
      header:'New Signup',
      src:"./assets/Refresh.svg"
    }]
  constructor() { }

  ngOnInit(): void {
  }
 
}
