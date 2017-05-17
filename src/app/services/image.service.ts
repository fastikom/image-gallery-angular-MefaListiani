import { Injectable } from '@angular/core';
import {Image} from '../models/image';

@Injectable()
export class ImageService {

  images: Image[] = [
    new Image('1', 'Bapak Pucung', 'Bapak Pucung description', 'https://angularbooks.com/img/angular4/img1.jpg', 'https://angularbooks.com/img/angular4/img1-l.jpg'),
    new Image('2', 'Jembatan Masa Depan', 'Jembatan Masa Depan description', 'https://angularbooks.com/img/angular4/img2.jpg', 'https://angularbooks.com/img/angular4/img2-l.jpg'),
    new Image('3', 'Selfie', 'Selfie description', 'https://angularbooks.com/img/angular4/img3.jpg', 'https://angularbooks.com/img/angular4/img3-l.jpg'),
    new Image('4', 'Duduk duduk saja', 'Melamun di atas Awan', 'https://angularbooks.com/img/angular4/img4.jpg', 'https://angularbooks.com/img/angular4/img4-l.jpg'),
    new Image('5', 'Rumput yang bergoyang', 'Rumput description', 'https://angularbooks.com/img/angular4/img5.jpg', 'https://angularbooks.com/img/angular4/img5-l.jpg'),
    new Image('6', 'Gajah Abu abu', 'Gajah Abu abu description', 'https://angularbooks.com/img/angular4/img6.jpg', 'https://angularbooks.com/img/angular4/img6-l.jpg'),
    new Image('7', 'Matahari Terbenam', 'Matahari Terbenam description', 'https://angularbooks.com/img/angular4/img7.jpg', 'https://angularbooks.com/img/angular4/img7-l.jpg'),
    new Image('8', 'Gedung Serbaguna', 'Gedung Serbaguna description', 'https://angularbooks.com/img/angular4/img8.jpg', 'https://angularbooks.com/img/angular4/img8-l.jpg'),
  ];

  constructor() { }

  getImages() {
    return this.images;
  }
}