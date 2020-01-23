import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocklanding',
  templateUrl: './rocklanding.component.html',
  styleUrls: ['./rocklanding.component.css']
})
export class RocklandingComponent implements OnInit {

  constructor() { }

  public imagesUrl;
 
  ngOnInit() {
    this.imagesUrl = ['assets/image/group-10.png', 'assets/image/placement.png'];
  }

}
