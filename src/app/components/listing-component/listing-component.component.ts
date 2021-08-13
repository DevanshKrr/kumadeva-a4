import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing-component.component.html',
  styleUrls: ['./listing-component.component.css']
})
export class ListingComponentComponent implements OnInit {

  constructor(private dailyMotionService:DailyMotionService) { }

 @Input() list:Video[] = []
 @Input() playListPage:boolean = false;

  ngOnInit(): void {
    console.log(this.list);
    
  }


 

}
