import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-notfound-details',
  templateUrl: './error-notfound-details.component.html',
  styleUrls: ['./error-notfound-details.component.scss', '../app.component.scss']
})
export class ErrorNotfoundDetailsComponent implements OnInit {
  messgage =  "Not found an entity Launch";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

     /***
   * return in a previous page
   */
      prev(){
        this.router.navigate(['/launch/upcoming/']);
      }
}
