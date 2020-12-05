import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rainbow]'
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.borderColor') borderColor: string;
  @HostBinding('style.borderWidth') borderWidth = '5px';
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}