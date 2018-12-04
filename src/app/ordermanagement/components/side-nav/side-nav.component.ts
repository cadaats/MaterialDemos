import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 840;
@Component({
  selector: 'cs-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  shouldRun = true;
  users: Observable<User[]>;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone, private userService: UserService) {
    this.mediaMatcher.addListener(mql =>
      // zone.run(() => this.mediaMatcher = mql)); -- Old Code
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
   }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(data => {
      console.log(data);
    });
  }

  isSmallScreen(event): boolean {
    return this.mediaMatcher.matches;
  }
}
