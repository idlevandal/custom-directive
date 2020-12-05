import { style } from '@angular/animations';
import { Directive, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rainbow]'
})
export class RainbowDirective {

  @Input() bStyle: string;

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') borderColor: string;
  @HostBinding('style.borderWidth') borderWidth = '5px';
  @HostBinding('style.borderStyle') 
  get style() {
    return this.bStyle;
  }

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}