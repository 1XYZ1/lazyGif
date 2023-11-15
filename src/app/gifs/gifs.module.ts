import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './components/gifs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GifsComponent, HomePageComponent, SearchBoxComponent, ListGifsComponent, GifsCardComponent ],
  imports: [
    CommonModule,
    SharedModule


  ],
  exports: [GifsComponent, HomePageComponent, SearchBoxComponent, ListGifsComponent]
})
export class GifsModule { }
