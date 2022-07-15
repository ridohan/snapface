import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapService} from "../services/FaceSnapsService";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapActionText!: string;


  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit(): void {

    this.isSnaped=false;
    this.snapActionText="Oh Snap !";
  }

  onSnap(){
    if(!this.isSnaped){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.isSnaped=true;
      this.snapActionText="Oops, unSnap!";

    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.snapActionText="Oh Snap !";
      this.isSnaped=false

    }
  }


}
