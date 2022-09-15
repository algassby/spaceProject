import { Component, Inject, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { NavigationService } from './service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'space';
  currentRoutes:  {name: string, path: string}[] = [] ;
  constructor(private navigation: NavigationService){}
  ngOnInit(): void {
   
  }
  back(){
    this.navigation.back();
  }
   
}
