import {  Component, OnInit, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myPopover') myPopover: NgbPopover;
  @ViewChild('secondPopover') secondPopover:NgbPopover;
  @ViewChild('thirdPopover') thirdPopover:NgbPopover;
  ngOnInit() {
    setTimeout(() => {
      this.myPopover.open(); // Open the popover after a delay of 1 second
    }, 1000);
  }

  openPopover() {
    this.secondPopover.open();
  }
  closePopover() {
    this.myPopover.close();
  }
  openSecondPopover(){
    this.thirdPopover.open()
  }
  closeSecondPopover(){
    this.secondPopover.close()
  }
}
