import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";
import {FaceSnapService} from "../services/FaceSnapsService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap!: FaceSnap;

  isSnaped!: boolean;
  snapActionText!: string;


  constructor(private faceSnapsService: FaceSnapService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];

    this.isSnaped=false;
    this.snapActionText="Oh Snap !";
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);

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
