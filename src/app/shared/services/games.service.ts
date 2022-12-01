import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private _HttpClient: HttpClient) {}

  // Get Games API
  getGames(): Observable<any> {
    return this._HttpClient.get(`${environments.gamesApi}`);
  }

  // Get Games By Id
  getGamesId(id: number): Observable<any> {
    return this._HttpClient.get(`${environments.gameApi}?id=${id}`);
  }

  //Get Games By Cat
  getGamesByCat(cat: string): Observable<any> {
    return this._HttpClient.get(`${environments.gamesApi}?category=${cat}`);
  }

  //Get Games By PlateForm
  getGamesByPlatForm(plat: string): Observable<any> {
    return this._HttpClient.get(`${environments.gamesApi}?platform=${plat}`);
  }

  //Get Games By Sorted
  getGamesBySored(sort: string): Observable<any> {
    return this._HttpClient.get(`${environments.gamesApi}?sort-by=${sort}`);
  }

  //Get Games By Sorted Plat Cat    platform=browser&category=mmorpg&sort-by=release-date
  getGamesBySPC(cat: string, plat: string, sort: string): Observable<any> {
    return this._HttpClient.get(
      `${environments.gamesApi}?${
        plat != 'Browse By Platform:' ? `platform=${plat}&` : ''
      }${sort != 'Sort By:' ? `sort-by=${sort}&` : ''}${
        cat != 'all' ? `category=${cat}&` : ''
      }`
    );
  }

  // Method Play And Stop Video
  // Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    el.classList.replace('d-none', 'd-flex');
    el.muted = true;
    sp.classList.replace('d-none', 'd-flex');
    el.play()
      .then(() => {
        sp.classList.replace('d-flex', 'd-none');
      })
      .catch((err) => {
        console.log('Not Support');
      });
  }

  // Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    sp.classList.replace('d-flex', 'd-none');
    el.muted = true;
    el.pause();
    el.classList.replace('d-flex', 'd-none');
  }
}
