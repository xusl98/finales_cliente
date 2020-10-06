import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finales-cliente';

  quitarTabActiva(): void{
    document.querySelector('a.active').classList.remove("active");
  }
}
