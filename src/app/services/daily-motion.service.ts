import { Injectable } from '@angular/core';
import Video from '../models/Video';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionService {
private list:Video[] = []
  constructor(private http: HttpClient) { }
  // Get the videos with the search keywords

  teamListObservable = new BehaviorSubject<Video[]>([])

  

  getUsersFromAPI = (keyword:string):Observable<any> => {
     return this.http.get<any>(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${keyword}`)
    //   console.log(this.http.get<Video[]>(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${keyword}`))
      
    // this.teamListObservable.next( this.list)
  }
 setList = (list:Video[]) =>{
   this.list = list
   this.teamListObservable.next(this.list)
   
 }

 getList = ():Video[] =>{
   return this.list
 }


  
}
