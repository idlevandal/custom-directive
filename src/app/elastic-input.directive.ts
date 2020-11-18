import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  AfterViewChecked
} from '@angular/core';

@Directive({
  selector: '[elasticInput]',
})
export class ElasticInputDirective implements OnInit, AfterViewChecked {
  dummyEl: HTMLElement;

  @HostListener('input', ['$event.target'])
  onInput(e): void {
    this.update();
  }
  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.dummyEl = this.document.createElement('div');
    this.dummyEl.style.position = 'fixed';
    this.dummyEl.style.top = '-999px';
    this.dummyEl.style.paddingLeft = '20px';
    this.dummyEl.style.left = '0';
    this.document.body.appendChild(this.dummyEl);
    this.update();
  }
  ngAfterViewChecked(): void {
    this.update();
  }

  update(): void {
    this.dummyEl.innerText =
      this.el.nativeElement.value || this.el.nativeElement.placeholder;
    this.el.nativeElement.style.width = `${this.dummyEl.clientWidth + 20}px`;
  }
}
