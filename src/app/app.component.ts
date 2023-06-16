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
      this.myPopover.open();
    }, 1000);
  }

  openPopover() {
    this.secondPopover.open();
    this.myPopover.close();
  }
  openThirdPopover(){
    this.thirdPopover.open()
    this.secondPopover.close()
  }

}
