import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[checkNum]'
})
export class CheckNumDirective {

  constructor(private ref: ElementRef) { }

  @Output() holdTime: EventEmitter<string> = new EventEmitter();
  @Input() defaultValue;

  ngOnInit(): void {
    this.ref.nativeElement.value = this.defaultValue;
  }

  @HostListener('keyup') onkeyup() {
    if (this.ref.nativeElement.value < 0 || this.ref.nativeElement.value > 5) {
      this.ref.nativeElement.style.backgroundColor = 'red';
      this.holdTime.emit('invalid');
    } else {
      this.ref.nativeElement.style.backgroundColor = 'green';
      this.holdTime.emit('valid');
    }
  }
  
  // capture the $event and pass it to the function
  @HostListener('wheel', ['$event']) onWheel($event: WheelEvent) {
    console.log($event.deltaY);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightColor('red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlightColor('#495057');

  }

  private highlightColor(color: string): void {
    this.ref.nativeElement.style.color = color;
  }
}