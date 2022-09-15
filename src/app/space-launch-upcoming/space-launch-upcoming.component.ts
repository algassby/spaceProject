import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, map, Observable, pipe, Subject, takeUntil, timer } from 'rxjs';
import { Launch } from '../model/launch';
import { ILaunchs, IResponse } from '../model/response.interface';
import { LaunchService } from '../service/launch.service';

@Component({
  selector: 'app-space-launch-upcoming',
  templateUrl: './space-launch-upcoming.component.html',
  styleUrls: ['./space-launch-upcoming.component.scss', '../app.component.scss']
})


export class SpaceLaunchUpcomingComponent implements OnInit, OnDestroy {

  results : any[] = [];
  private unSubscription = new Subject();
  constructor(private launchService: LaunchService, private router: Router) { }
  ngOnDestroy(): void {
    this.unSubscription.next(null);
    this.unSubscription.complete();
  }
 
  ngOnInit(): void {
    this.getAllUpcomingLaunch();

  }
  getAllUpcomingLaunch(){

    this.launchService.getAllUpcomingLaunch()
    .pipe(takeUntil(this.unSubscription))
    .subscribe({
      next: (res: any)=>{
        console.log(res);
        this.results = res.results;
      },
      error: error=>{
        console.log(error);
      },
      complete: ()=>{
        console.log("Everything is ok");
      }
    })
  }
  view(id: string){
    this.router.navigate(['/launch/upcoming/', id]);
  }

}
