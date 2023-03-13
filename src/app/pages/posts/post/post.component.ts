import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() message:any;
  @Output() postClick = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
      
  }
  onClick(){
    this.postClick.emit(this.message.id);
  }
}
