import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  expanded: boolean;

  constructor() { }

  diap: number = 0;

  ngOnInit(): void {
    document.getElementsByTagName('nav')[0].style.display = 'none';
    this.expanded = false;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key == '/'){
      this.expand();
    }
  }

  expand(){
    this.expanded = !this.expanded;
  }

  anterior(){
    this.diap--;
  }
  siguiente(){
    console.log(this.diap)
    this.diap++;
  }

}
