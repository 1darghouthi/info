import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerpipe',
  templateUrl: './exerpipe.component.html',
  styleUrls: ['./exerpipe.component.scss']
})
export class ExerpipeComponent implements OnInit {
fulltext: string ="welcome To pipe ...1111"
numero: number=3.455
date=new Date();
filterdata: any;
list: any[]=[{ id: 1, fname: 'Vikram'},
{ id: 2, fname: 'Vivek'},
{ id: 3, fname: 'Vijay'}]

fillterdata: any;
  constructor() { }

  ngOnInit(): void {
  }

  conteur(){
    return new Array(this.fulltext.length);
  }
}
