import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingSongs: any;
  albumSongs: any;
  popularSongs: any;
  showTrending=false;
  showAlbum=false;
  showPopular=false;
  visibleTrendingSongs: any;
  hiddenTrendingSongs: any;
  visibleAlbumSongs: any;
  hiddenAlbumSongs: any;
  visiblePopularSongs: any;
  hiddenPopularSongs: any;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getTrendingSongs();
    this.getAlbumSongs();
    this.getPopularSongs();
  }

  getTrendingSongs(){
   this.http.get('http://localhost:4200/assets/data/trending-songs.json').subscribe(songs=>{
     this.trendingSongs=songs;
     this.visibleTrendingSongs = this.trendingSongs.slice(0, 4);
     this.hiddenTrendingSongs = this.trendingSongs.slice(4);
     console.log(this.trendingSongs);
   })
  }

  getAlbumSongs(){
    this.http.get('http://localhost:4200/assets/data/album-songs.json').subscribe(songs=>{
      this.albumSongs=songs;
      this.visibleAlbumSongs = this.albumSongs.slice(0, 4);
      this.hiddenAlbumSongs = this.albumSongs.slice(4);
      console.log(this.albumSongs);
    })
   }

   getPopularSongs(){
    this.http.get('http://localhost:4200/assets/data/popular-songs.json').subscribe(songs=>{
      this.popularSongs=songs;
      this.visiblePopularSongs = this.popularSongs.slice(0, 4);
      this.hiddenPopularSongs= this.popularSongs.slice(4);
      console.log(this.popularSongs);
    })
   }

   goToSong(type: string, id: string) {
    this.router.navigate(['song', type, id]);
  }

  toggleViewTrending(): void {
    this.showTrending = !this.showTrending;
  }

  toggleViewAlbum(): void {
    this.showAlbum = !this.showAlbum;
  }

  toggleViewPopular(): void {
    this.showPopular = !this.showPopular;
  }

}
