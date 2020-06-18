import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tudo-sobre-orlando';

  onActivate(event) {
    window.scroll(0, 0);
  }
}
