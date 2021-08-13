import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dailyMotionService:DailyMotionService) { }
  listSubscription = new Subscription()
  videosList:Video[] = []
  ngOnInit(): void {
    this.listSubscription = this.dailyMotionService.teamListObservable.subscribe(
      (dataFromObservable) => {
        this.videosList = dataFromObservable
      }
    )
  }


}
