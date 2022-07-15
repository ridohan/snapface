import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService{
  private faceSnaps:FaceSnap[] = [
    {
      id: 1,
      title: 'bounty Hunter',
      description: 'For the right price... Anything',
      imageUrl: 'https://picsum.photos/500/500',
      createdDate: new Date(),
      snaps:7,
      location:'Hard lane'

    },
    {
      id: 2,
      title: 'drow Ranger',
      description: "You've got to earn it",
      imageUrl: 'https://picsum.photos/400/300',
      createdDate: new Date(),
      snaps:0,
      location:'Easy lane'
    },
    {
      id: 3,
      title: 'enigma',
      description: "Welcome to the void",
      imageUrl: 'https://picsum.photos/600/300',
      createdDate: new Date(),
      snaps:100,
      location:'Jungle'
    }
  ]



  snapFaceSnapById(faceSnapId:number, snapType : 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }

  getFaceSnapById(faceSnapId:number): FaceSnap{
    const faceSnap = this.faceSnaps.find(value => value.id===faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!');
    }else{
      return faceSnap;
    }

  }

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }
}
