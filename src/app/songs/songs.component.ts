import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  type= '';
  id='';
  url='';
  songs:any;
  song:any;
  errorMsg="";
  username="";
  review="";


  constructor(private router: Router,private route:ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id'];
    if(this.type==='trending'){
       this.url='http://localhost:4200/assets/data/trending-songs.json';
    }
    if(this.type==='popular'){
      this.url='http://localhost:4200/assets/data/popular-songs.json';
    }
    if(this.type==='album'){
      this.url='http://localhost:4200/assets/data/album-songs.json';
    }
    this.getSong();
  }

  getSong(){
    this.http.get(this.url).subscribe((songs)=>{
      this.songs=songs;
      this.song=this.songs.find((song: { id: { toString: () => string; }; }) => song.id.toString() === this.id);
    });
  }

  submit(){
    if (this.username.trim().length === 0 || this.review.trim().length === 0) {
      this.errorMsg="Please fill all the fields"
    }
    else{
    this.router.navigate(['home']);
    }
  }

}
