import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate, ParamMap, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { Launch } from '../model/launch';
import { LaunchService } from '../service/launch.service';

@Component({
  selector: 'app-single-lauch-up-coming',
  templateUrl: './single-lauch-up-coming.component.html',
  styleUrls: ['./single-lauch-up-coming.component.scss', '../app.component.scss']
})
export class SingleLauchUpComingComponent implements OnInit, OnDestroy {

  public launch : Launch = new Launch();
  unSubscription = new Subject();
  public id: string ='';
  constructor(private launchService: LaunchService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUpcomingLaunch(id as string);

  }

  ngOnDestroy(): void {
    this.unSubscription.next(null);
    this.unSubscription.complete();
  }
  /**
   * Get a Launch by id 
   * @param id 
   */
  getUpcomingLaunch(id: string){
    
    this.launchService.getUpcomingLaunch(id)
    .pipe(takeUntil(this.unSubscription))
    .subscribe({
      next: res=>{
        console.log(res);
        this.launch = res;
      },
      error: error=>{
        console.log(error.message);
        this.router.navigate(['notFoundDetails']);
      },
      complete: ()=>{
        console.log("Everything is ok");
      }
    })
  }
  /***
   * return in a previous page
   */
  prev(){
    this.router.navigate(['']);
  }
}
