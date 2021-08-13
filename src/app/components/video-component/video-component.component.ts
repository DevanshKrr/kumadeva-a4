import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit {

  constructor(private userDataService:UserDataService) { }
  @Input() id:string = ""
  @Input() image:string = ""
  @Input() title:string = ""
  @Input() owner_image:string = ""
  @Input() owner_name:string = ""
  @Input() time:number = 0
  @Input() views:number = 0 
  @Input() PlayListPageRequest:boolean = false;
  list:Video[] = []
   public existsPlaylist:boolean = false;
   btnText:string = "Add To Playlist"
  boolSubscription = new Subscription()

  ngOnInit(): void {
    this.boolSubscription = this.userDataService.listObservable.subscribe(
      (dataFromObservable) => {
        this.list = dataFromObservable
      })
      let i =0;
      for(i = 0; i<this.list.length; i++){
        if(this.list[i].id === this.id){
          this.existsPlaylist = true;
        }
      }
      if(this.existsPlaylist){
        this.btnText = "Already Exists"
      this.existsPlaylist = true;
      }
    
  }
  AddToPlaylist = () => {
    this.userDataService.addVideo(this.toObject())
    this.btnText = "Already Exists"
    this.existsPlaylist = true;
    
  }
  toObject = ():Video  =>{
    return {
      "id" : this.id,
      "title" : this.title,
      "thumbnail_360_url" : this.image,
      "created_time" : this.time,
      "owner.username" : this.owner_name,
      "owner.avatar_80_url" : this.owner_image,
      "views_total" : this.views
      }
  }
}
