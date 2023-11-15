import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
// import 'localstorage-polyfill'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SharedModule, GifsModule],



})
export class AppComponent {
  title = 'gifs-app';
}

