import { Component, OnInit,ViewChild } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-rocklanding',
  templateUrl: './rocklanding.component.html',
  styleUrls: ['./rocklanding.component.css']
})
export class RocklandingComponent implements OnInit {
 
  constructor() {

   }

  
  public imagesUrl;
  public carousalUrl;
  public rockingOffer;
  style:any;
  slideIndex = 1;
  logoSliderOptions;
  
  ngOnInit() {
    //this.imagesUrl = ['assets/image/group-10.png', 'assets/image/placement.png'];
    this.imagesUrl = ['assets/image/111.jpg', 'assets/image/222.jpg', 'assets/image/333.jpg'];
    this.rockingOffer = ['assets/image/off1.jpg', 'assets/image/off2.jpg', 'assets/image/off3.jpg', 'assets/image/off4.jpg'];
    this.logoSliderOptions = { items: 7, dots: false, navigation: false, autoplay: true, autoplayTimeout: 500, loop: true }
    this.carousalUrl = [
      'assets/image/Candidknots.jpg','assets/image/databridge.gif','assets/image/divami.png','assets/image/Earlysalary.png','assets/image/okcredit_logo-1.png','assets/image/Advarisk.png'
  ];
    var $contents = $('.tab-content');
    $contents.slice(1).hide();
    $('.tab').hover(function() {
      var $target = $('#' + this.id + 'show').show();
      $contents.not($target).hide();
    });

    this.showDivs(this.slideIndex);
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i]['style'].display = "none";  
    }
    x[this.slideIndex-1]['style'].display = "block";  
  }

  goToPage(){
    window.open("https://www.emagine.co.in/rockregister", '_blank');    
  }


  //mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
 // myCarouselImages =[1,2,3,4,5,6].map((i)=>'assets/image/bitmap-copy-3.png', 'assets/image/placement.png');
  //mySlideOptions={items: 1, dots: true, nav: false};
  //myCarouselOptions={items: 3, dots: true, nav: true};

}
