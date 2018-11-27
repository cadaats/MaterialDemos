import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

const SMALL_WIDTH_BREAKPOINT = 840;
@Component({
  selector: 'cs-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  shouldRun = true;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
   }

  ngOnInit() {
  }

  isSmallScreen(event): boolean {
    return this.mediaMatcher.matches;
  }
}
