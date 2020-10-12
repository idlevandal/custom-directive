import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  num: number = 3.33;

  ngOnInit(): void {
    //
  }

  logStatus(status: string): void {
    console.log(status);
    
  }
}
