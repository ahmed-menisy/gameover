import { Component, ElementRef, OnInit } from '@angular/core';
import { GamesService } from './../../../shared/services/games.service';
import { Game } from './../../../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  constructor(private _GamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  // Get Games Data From API
  getGames(): void {
    this._GamesService.getGames().subscribe({
      next: (response) => {
        console.log(response);
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
