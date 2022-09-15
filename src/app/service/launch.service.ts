import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Launch } from '../model/launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private urlUpcomingLaunch = `${environment.apiUrl}/launch/upcoming/`
  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns 50 upcoming launch
   */
  getAllUpcomingLaunch(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlUpcomingLaunch}?limit=50`);
  }
  getUpcomingLaunch(id: string): Observable<any>{
    return this.http.get<any>(`${this.urlUpcomingLaunch}${id}`);
  }
}
