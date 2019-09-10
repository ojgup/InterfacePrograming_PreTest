import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { TitleComponent } from './title/title.component';
import { RuntimeComponent } from './runtime/runtime.component';
import { RatingComponent } from './rating/rating.component';
import { ReleaseDateComponent } from './release-date/release-date.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieInfoComponentComponent,
    MovieThumbnailComponent,
    TitleComponent,
    RuntimeComponent,
    RatingComponent,
    ReleaseDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
