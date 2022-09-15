import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss', '../app.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  messgage = "404 Not found";
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

    /***
   * return in a previous page
   */
     prev(){
      this.router.navigate(['']);
    }

}
