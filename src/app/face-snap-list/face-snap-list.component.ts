import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'bounty Hunter',
        description: 'For the right price... Anything',
        imageUrl: 'https://picsum.photos/500/500',
        createdDate: new Date(),
        snaps:7,
        location:'Hard lane'

      },
      {
        title: 'drow Ranger',
        description: "You've got to earn it",
        imageUrl: 'https://picsum.photos/400/300',
        createdDate: new Date(),
        snaps:0,
        location:'Easy lane'
      },
      {
        title: 'enigma',
        description: "Welcome to the void",
        imageUrl: 'https://picsum.photos/600/300',
        createdDate: new Date(),
        snaps:100,
        location:'Jungle'
      }
    ]
  }

}
