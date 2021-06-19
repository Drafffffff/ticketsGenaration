// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// import encoder from "./encoder";
import sha256 from "crypto-js/sha256";
import body1 from "./assets/body/1.png";
import body2 from "./assets/body/2.png";
import body3 from "./assets/body/3.png";
import eye1 from "./assets/eye/1.png";
import eye2 from "./assets/eye/2.png";
import eye3 from "./assets/eye/3.png";
import eye4 from "./assets/eye/4.png";
import eye5 from "./assets/eye/5.png";
import eyebrow1 from "./assets/eyebrow/1.png";
import eyebrow2 from "./assets/eyebrow/2.png";
import eyebrow3 from "./assets/eyebrow/3.png";
import eyebrow4 from "./assets/eyebrow/4.png";
import eyebrow5 from "./assets/eyebrow/5.png";
import faceDecoration1 from "./assets/faceDecoration/1.png";
import faceDecoration2 from "./assets/faceDecoration/2.png";
import faceDecoration3 from "./assets/faceDecoration/3.png";
import faceDecoration4 from "./assets/faceDecoration/4.png";
import faceDecoration5 from "./assets/faceDecoration/5.png";
import faceDecoration6 from "./assets/faceDecoration/6.png";
import hair1 from "./assets/hair/1.png";
import hair2 from "./assets/hair/2.png";
import hair3 from "./assets/hair/3.png";
import hair4 from "./assets/hair/4.png";
import hair5 from "./assets/hair/5.png";
import hair6 from "./assets/hair/6.png";
import hair7 from "./assets/hair/7.png";
import head1 from "./assets/head/1.png";
import head2 from "./assets/head/2.png";
import head3 from "./assets/head/3.png";
import head4 from "./assets/head/4.png";
import head5 from "./assets/head/5.png";
import head6 from "./assets/head/6.png";
import head7 from "./assets/head/7.png";
import head8 from "./assets/head/8.png";
import head9 from "./assets/head/9.png";
import head10 from "./assets/head/10.png";
import head11 from "./assets/head/11.png";
import head12 from "./assets/head/12.png";
import mouth1 from "./assets/mouth/1.png";
import mouth2 from "./assets/mouth/2.png";
import mouth3 from "./assets/mouth/3.png";
import mouth4 from "./assets/mouth/4.png";
import mouth5 from "./assets/mouth/5.png";
import mouth6 from "./assets/mouth/6.png";
import mouth7 from "./assets/mouth/7.png";
import nose1 from "./assets/nose/1.png";
import nose2 from "./assets/nose/2.png";
import nose3 from "./assets/nose/3.png";
import nose4 from "./assets/nose/4.png";
import nose5 from "./assets/nose/5.png";
import nose6 from "./assets/nose/6.png";
import nose7 from "./assets/nose/7.png";
import nose8 from "./assets/nose/8.png";
import nose9 from "./assets/nose/9.png";

export default class Graph {
  constructor() {
    this.string = "";
    this.showKey = [];
    this.load();
    this.showIndex = [];
  }
  setStr(str) {
    this.string = str;
  }
  show() {
    const keys = Object.keys(this.imgs);
    this.showIndex.map((v, i) => {
      image(this.imgs[keys[i]][v], 0, 0, width, height);
    });
  }
  encodeKey() {
    const hashDigest = sha256(this.string);
    this.showKey = hashDigest.words;
    let length = [];
    for (let i in this.imgs) {
      length.push(this.imgs[i].length);
    }
    this.showIndex = length.map((v, i) => Math.abs(this.showKey[i] % v));
    // console.log(this.showIndex);
  }
  load() {
    this.imgs = {
      body: [loadImage(body1), loadImage(body2), loadImage(body3)],
      eye: [
        loadImage(eye1),
        loadImage(eye2),
        loadImage(eye3),
        loadImage(eye4),
        loadImage(eye5),
      ],
      eyebrow: [
        loadImage(eyebrow1),
        loadImage(eyebrow2),
        loadImage(eyebrow3),
        loadImage(eyebrow4),
        loadImage(eyebrow5),
      ],
      faceDecoration: [
        loadImage(faceDecoration1),
        loadImage(faceDecoration2),
        loadImage(faceDecoration3),
        loadImage(faceDecoration4),
        loadImage(faceDecoration5),
        loadImage(faceDecoration6),
      ],
      hair: [
        loadImage(hair1),
        loadImage(hair2),
        loadImage(hair3),
        loadImage(hair4),
        loadImage(hair5),
        loadImage(hair6),
        loadImage(hair7),
      ],
      head: [
        loadImage(head1),
        loadImage(head2),
        loadImage(head3),
        loadImage(head4),
        loadImage(head5),
        loadImage(head6),
        loadImage(head7),
        loadImage(head8),
        loadImage(head9),
        loadImage(head10),
        loadImage(head11),
        loadImage(head12),
      ],
      mouth: [
        loadImage(mouth1),
        loadImage(mouth2),
        loadImage(mouth3),
        loadImage(mouth4),
        loadImage(mouth5),
        loadImage(mouth6),
        loadImage(mouth7),
      ],
      nose: [
        loadImage(nose1),
        loadImage(nose2),
        loadImage(nose3),
        loadImage(nose4),
        loadImage(nose5),
        loadImage(nose6),
        loadImage(nose7),
        loadImage(nose8),
        loadImage(nose9),
      ],
    };
  }
}
