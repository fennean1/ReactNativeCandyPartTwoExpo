import {
  Animated,
} from "react-native";


export class TileData {
  constructor(img, key) {
    this.key = key;
    this.location = new Animated.ValueXY();
    this.img = img;
    this.scale = new Animated.Value(1);
  }
}


/*

export function TileData(image,key) {
  this.key = key;
  this.location = new Animated.ValueXY();
  this.img = image;
  this.scale = new Animated.Value(1);
}

*/
