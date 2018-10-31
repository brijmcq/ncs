import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  slideOpts = {
    effect: 'flip'
  };
  deals = [
    {
      imgUrl: 'assets/images/mitsubishi_otis_101518.jpg',
      text: 'PAY AS LOW AS PHP 0 FOR A NEW MITSUBISHI'
    },
    {
      imgUrl: 'assets/images/nissan_north_edsa_082918.jpg',
      text: 'DRIVE IN STYLE WITH A BRAND NEW NISSAN'
    },
    {
      imgUrl: 'assets/images/ford_carinta_100418.jpg',
      text: 'PAY NOTHING WHEN YOU BUY A NEW FORD!'
    },
    {
      imgUrl: 'assets/images/toyota_makati_092418.jpg',
      text: 'NOW IS THE BEST TIME FOR A NEW TOYOTA'
    },
    {
      imgUrl: 'assets/images/honda_carmona_09102018.jpg',
      text: 'INQUIRE NOW FOR LOWER AND BEST HONDA DEALS'
    },
    {
      imgUrl: 'assets/images/subaru_manila_bay_090418.jpg',
      text: "SUBARU'S GOT THE DEAL FOR YOUR NEW CAR"
    }
  ];

  mainSlider = [
    {
      imgUrl: 'assets/images/hyundai_commonwealth_102518.jpg',
      text: 'INQUIRE NOW'
    },
    {
      imgUrl: 'assets/images/couple_cars.jpg',
      text: 'READ MORE'
    },
    {
      imgUrl:
        'https://www.carmudi.com.ph/newcars/images/brands/model/honda/br_v_review/1.jpg',
      text: 'READ MORE',
      description: '6-FIGURE SUV Seats 7 | Honda BR-v 1.5 S CVT Modulo Review'
    }
  ];
  goToFirstSlide(): void {
    console.log('slide!!!');
  }
}
