import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var M: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'owl-carousel';
  images_1: any;

  mySlideImages = [
    '../assets/images/demo_0.jpg',
    '../assets/images/demo_1.jpg',
    '../assets/images/demo_2.jpg',
    '../assets/images/demo_3.jpg',
    '../assets/images/demo_4.jpg',
    '../assets/images/demo_5.jpg',
    '../assets/images/demo_6.jpg',
    '../assets/images/demo_7.jpg'
  ];
  myCarouselImages = [
    '../assets/images/demo_0.jpg',
    '../assets/images/demo_1.jpg',
    '../assets/images/demo_2.jpg',
    '../assets/images/demo_3.jpg',
    '../assets/images/demo_4.jpg',
    '../assets/images/demo_5.jpg',
    '../assets/images/demo_6.jpg',
    '../assets/images/demo_7.jpg'
  ];

  mySlideOptions = { 
    items: 4, 
    dots: true, 
    nav: true,
    navText: ["<img class='prev' src='/assets/images/chevron-left.svg'>", "<img class='next' src='/assets/images/chevron-right.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  //
  images = [
    { image: '../assets/images/demo_0.jpg' },
    { image: '../assets/images/demo_1.jpg' },
    { image: '../assets/images/demo_2.jpg' },
    { image: '../assets/images/demo_3.jpg' },
    { image: '../assets/images/demo_4.jpg' },
    { image: '../assets/images/demo_5.jpg' },
    { image: '../assets/images/demo_6.jpg' },
    { image: '../assets/images/demo_7.jpg' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<img class='prev' src='/assets/images/chevron-left.svg'>", "<img class='next' src='/assets/images/chevron-right.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  options = {
    noWrap: true,
    numVible: 5
  };
  ngOnInit() {
    // Materilize
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);

    // Sky-wheel
    var sles = document.querySelectorAll('ran');
    $('#ran').skywheel({
      width:"200px",
      height:"200px",
      effect: 1,
    });
  }

  ngAfterViewInit() {
    $('#ran_url').skywheel({
      width:"200px",
      height:"200px",
      effect: 1,
    });
    $('#ran_url li:first-child').click();
  }
}
