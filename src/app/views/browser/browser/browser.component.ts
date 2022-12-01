import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/game';
import { GamesService } from 'src/app/shared/services/games.service';

// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GamesService: GamesService,
    private _Router: Router
  ) {
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  games: Game[] = [];
  curentLength: number = 13;

  // Curent Cat
  curentCat: string = this._ActivatedRoute.snapshot.params['category'] ?? 'all';

  // Curent Select

  curentC: string = '';
  curentS: string = '';

  curentYear: number = new Date().getFullYear();
  loading: boolean = true;

  // --------- Scroll
  @HostListener('window:scroll')
  seeMore(): void {
    if (scrollY + innerHeight + 200 >= document.body.offsetHeight) {
      if (this.games.length > this.curentLength) {
        this.curentLength += 13;
      } else {
        this.loading = false;
      }
    }
  }

  ngOnInit(): void {
    // Get Games
    console.log(this.curentCat);
    this.getGameByCat();

    // Custome Select Style

    $('.select2').customSelect({
      placeholder: '<span style="color: darkgray;">Browse By Genre:</span>',
      transition: 400,
      hideCallback: () => {
        var $cat = $(`.select-cust2 .custom-select`)
          .find('[class$="value"]')
          .text();

        var $sort = $(`.select-cust3 .custom-select`)
          .find('[class$="value"]')
          .text();

        console.log('browser', $cat, $sort);

        if (this.curentC !== $cat) this.getGamesBySPC($cat, 'browser', $sort);
        // this._Router.navigate([`/games/${$cat}`]);

        // this._ActivatedRoute.snapshot.pa
      },
    });

    $('.select3').customSelect({
      placeholder: '<span style="color: darkgray;">Sort By:</span>',
      transition: 400,

      hideCallback: () => {
        var $cat = $(`.select-cust2 .custom-select`)
          .find('[class$="value"]')
          .text();

        var $sort = $(`.select-cust3 .custom-select`)
          .find('[class$="value"]')
          .text();

        console.log('browser', $cat, $sort);

        if (this.curentS !== $sort) this.getGamesBySPC($cat, 'browser', $sort);

        // this._ActivatedRoute.snapshot.pa
      },
    });

    $(`#Genre option[value=${this.curentCat}]`).attr('selected', 'selected');
    $(`.select-cust2 .custom-select > button`).html(this.curentCat);
  }

  // Get Games By Cat
  getGameByCat(): void {
    var $sort = $(`.select-cust3 .custom-select`)
      .find('[class$="value"]')
      .text();

    this._GamesService
      .getGamesBySPC(this.curentCat, 'browser', $sort)
      .subscribe({
        next: (response) => {
          console.log(response);

          this.games = response;
        },
      });
  }

  // // Get Games By Plat
  // getGamesByPlatForm(plat: string): void {
  //   this._GamesService.getGamesByPlatForm(plat).subscribe({
  //     next: (response) => {
  //       console.log(response);

  //       this.games = response;
  //     },
  //   });
  // }

  // // Get Games By Sort
  // getGamesBySored(sort: string): void {
  //   this._GamesService.getGamesBySored(sort).subscribe({
  //     next: (response) => {
  //       console.log(response);

  //       this.games = response;
  //     },
  //   });
  // }

  // Get Games By Sort
  getGamesBySPC(cat: string, plat: string, sort: string): void {
    this._GamesService.getGamesBySPC(cat, plat, sort).subscribe({
      next: (response) => {
        console.log(response);

        this.games = response;
      },
    });
  }

  // Change Gerner
  gernerChange(value: string): void {
    this._GamesService.getGamesByCat(value).subscribe({
      next: (response) => {
        this.games = response;
      },
    });
  }

  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._GamesService.playVideo(el, sp);
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    this._GamesService.stopVideo(el, sp);
  }
}
