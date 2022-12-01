import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayotAuthComponent } from './shared/components/layot-auth/layot-auth.component';
import { LayotBlankComponent } from './shared/components/layot-blank/layot-blank.component';
import { AuthGuard, AuthGuard2 } from './shared/guards/auth.guard';
import { NotfoundModule } from './views/notfound/notfound.module';

const routes: Routes = [
  // LazyLoading Public Routing For Blank Pag
  {
    path: '',
    component: LayotBlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
        title: 'Home',
      },
      {
        path: 'games',
        loadChildren: () =>
          import('./views/games/games.module').then((m) => m.GamesModule),
        title: 'Games',
      },
      {
        path: 'games/:category',
        loadChildren: () =>
          import('./views/games/games.module').then((m) => m.GamesModule),
        title: 'Games',
      },
      {
        path: 'browser',
        loadChildren: () =>
          import('./views/browser/browser.module').then((m) => m.BrowserModule),
        title: 'Browser',
      },
      {
        path: 'browser/:category',
        loadChildren: () =>
          import('./views/browser/browser.module').then((m) => m.BrowserModule),
        title: 'Browser',
      },
      {
        path: 'lib',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/lib/lib.module').then((m) => m.LibModule),
        title: 'Lib',
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./views/search/search.module').then((m) => m.SearchModule),
        title: 'Search',
      },
      {
        path: 'details/:id',
        loadChildren: () =>
          import('./views/details/details.module').then((m) => m.DetailsModule),
        title: 'Details',
      },
      {
        path: 'aboutus',
        loadChildren: () =>
          import('./views/aboutus/aboutus.module').then((m) => m.AboutusModule),
        title: 'About Us',
      },
    ],
  },

  // LazyLoading Routing For Autho
  {
    path: 'auth',
    canActivate: [AuthGuard2],
    component: LayotAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  // Not Found Page
  { path: '**', loadChildren: () => NotfoundModule, title: 'NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
