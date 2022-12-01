import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from './../../../shared/services/games.service';
import { Game } from './../../../game';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GamesService: GamesService
  ) {}

  show: boolean = false;
  game: Game = {};

  // Get Games ID
  ngOnInit(): void {
    const curentId: number = this._ActivatedRoute.snapshot.params['id'];

    this._GamesService.getGamesId(curentId).subscribe({
      next: (response) => {
        console.log(response);
        this.game = response;
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

  // Show Text
  showText(): void {
    this.show = !this.show;
  }
}
