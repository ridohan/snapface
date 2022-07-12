import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapActionText!: string;


  ngOnInit(): void {

    this.isSnaped=false;
    this.snapActionText="Oh Snap !";
  }

  onSnap(){
    if(!this.isSnaped){
      this.faceSnap.snaps++;
      this.isSnaped=true;
      this.snapActionText="Oops, unSnap!";

    }else{
      this.faceSnap.snaps--;
      this.snapActionText="Oh Snap !";
      this.isSnaped=false

    }
  }


}
