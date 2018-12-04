import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cs-oms-app',
  template: `
   <cs-side-nav></cs-side-nav>
  `,
  styles: []
})
export class OmsAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/avatars.svg'));
  }

  ngOnInit() {
  }

}
