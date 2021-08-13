import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from '../models/Video';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private videoList:Video[] = []
  videoFound:boolean = true
  constructor() { }
  // Store videos in user playlist
  // Add a video to user's playlist
  // Retrieve all the videos in user's playlist

  listObservable = new BehaviorSubject<Video[]>([])
  existsList = new BehaviorSubject<boolean>(false)
  addVideo = (video:Video) =>{
    this.videoList.push(video)
    this.listObservable.next(this.videoList);
  }
  getVideos = ():Video[] =>{
    return this.videoList
  }

  setVideos = (list:Video[]) =>{
    this.videoList = list
    this.listObservable.next(this.videoList)
  }

  checkIfExists = (id:string) =>{
    let i = 0
    for(i = 0 ; i<this.videoList.length; i++){
      if(id === this.videoList[i].id){
        this.videoFound = true;
        break
      }
      this.videoFound = false
    }
    this.existsList.next(this.videoFound)
  }
}
