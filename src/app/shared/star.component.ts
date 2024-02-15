import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  standalone: true
})

export class StarComponent implements OnChanges{
  cropWidth:number = 75;
  @Output() ratingClicked: EventEmitter<string> = 
  new EventEmitter<string>();

  @Input() rating:number = 0

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5
  }
  
  onClick():void{
    this.ratingClicked.emit(`Product with ${this.rating} was clicked`);
    
  }

}
