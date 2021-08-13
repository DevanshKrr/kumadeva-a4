import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-my-playlist-component',
  templateUrl: './my-playlist-component.component.html',
  styleUrls: ['./my-playlist-component.component.css']
})
export class MyPlaylistComponentComponent implements OnInit {

videoSubscription = new Subscription();
 list: Video[] = []
 emptyList:boolean = false;
  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {
this.videoSubscription = this.userDataService.listObservable.subscribe(
  (dataFromObservable) => {
    this.list = dataFromObservable
    if(this.list.length === 0){
      this.emptyList = true;
    }
    else
    this.emptyList = false
  }
)
  }

  clearList = () =>{
    this.list = []
    this.userDataService.setVideos(this.list)
  }

}
