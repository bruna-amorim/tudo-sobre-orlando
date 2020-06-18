import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from 'ngx-gallery-9';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  urlToJson = './assets/arquivo/galeria.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 0,
        thumbnailMargin: 0,
      },
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.http.get<any>(this.urlToJson).subscribe((response) => {
      this.galleryImages = this.http = response;
    });
  }
}
