import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';
import { VideoComponentComponent } from './components/video-component/video-component.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { HomeScreenComponentComponent } from './components/home-screen-component/home-screen-component.component';
import { MyPlaylistComponentComponent } from './components/my-playlist-component/my-playlist-component.component';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ListingComponentComponent,
    VideoComponentComponent,
    HomeComponent,
    PlaylistComponent,
    NavComponentComponent,
    HomeScreenComponentComponent,
    MyPlaylistComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
