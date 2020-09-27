import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title:string = "akash"
  myarr = ['c','c++']
  isTrue = true
  constructor() { }
count = 0
  myfun(){
    this.count++
  }

  ngOnInit(): void {
                   //Toggle Click Function
                   $("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    $("#wrapper").toggleClass("toggled");
                  });
                  
  }

}
