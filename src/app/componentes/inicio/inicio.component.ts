import { Component, Inject, OnInit } from '@angular/core';
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private renderer: Renderer2, private element: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');  
}
ngOnDestroy(){
    this.renderer.removeStyle(this.document.body, 'overflow-y');
}

}
