import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotfoundDetailsComponent } from './error-notfound-details/error-notfound-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SingleLauchUpComingComponent } from './single-lauch-up-coming/single-lauch-up-coming.component';
import { SpaceLaunchUpcomingComponent } from './space-launch-upcoming/space-launch-upcoming.component';

const routes: Routes = [
  {path: '', component: SpaceLaunchUpcomingComponent},
  {path: 'notFoundDetails', component: ErrorNotfoundDetailsComponent},
  {path: 'launch/upcoming/:id', component: SingleLauchUpComingComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
