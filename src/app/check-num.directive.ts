import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[checkNum]'
})
export class CheckNumDirective {

  constructor(private ref: ElementRef) { }

  // TO USE: on the DOM element (holdTime)="logStatus($event)"
  // in Directive: this.holdTime.emit(val)
  @Output() holdTime: EventEmitter<string> = new EventEmitter();
  @Input() defaultValue;

  ngOnInit(): void {
    this.ref.nativeElement.value = this.defaultValue;
  }

  @HostListener('keyup') onkeyup() {
    if (this.ref.nativeElement.value < 0 || this.ref.nativeElement.value > 5) {
      this.ref.nativeElement.style.border = '3px solid red';
      this.holdTime.emit('invalid');
    } else {
      this.ref.nativeElement.style.border = '3px solid green';
      this.holdTime.emit('valid');
    }
  }
  
  // capture the $event and pass it to the function
  @HostListener('wheel', ['$event']) onWheel($event: WheelEvent) {
    console.log($event.deltaY);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ref.nativeElement.style.boxShadow = '5px 5px 20px rgba(0,0,0,.2)';
    this.highlightColor('red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.ref.nativeElement.style.boxShadow = 'none';
    this.highlightColor('#495057');

  }

  private highlightColor(color: string): void {
    this.ref.nativeElement.style.color = color;
  }
}