import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';

@Component({
  selector: 'app-home-screen-component',
  templateUrl: './home-screen-component.component.html',
  styleUrls: ['./home-screen-component.component.css']
})
export class HomeScreenComponentComponent implements OnInit {
  usersListFromAPI:Video[] = []
  keyword:string = ""
  constructor(private dailyMotionService:DailyMotionService) { }
  videosFromAPI:Video[] = []
  ngOnInit(): void {
  }

  buttonPressed = () =>{
     this.dailyMotionService.getUsersFromAPI(this.keyword).subscribe((data:any)=>{
      this.videosFromAPI = data["list"]
      this.dailyMotionService.setList(this.videosFromAPI)
      
    });
  }
  onKey = (event:any) => {
    this.keyword = event.target.value
    
  }

}
