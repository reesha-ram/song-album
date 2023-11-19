import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean= false;


  constructor() {
  }
  ngOnInit(): void {
  }

  getStars(rating: number): number[] {
    const numberOfStars = Math.round(rating);
    return Array.from({ length: numberOfStars });
  }


}
