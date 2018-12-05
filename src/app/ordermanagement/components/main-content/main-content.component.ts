import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'cs-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.userService.users.subscribe(users => {
          if (users.length == 0) { return; }
          this.user = this.userService.getUserById(id);
        });
      });
    }

  ngOnInit() {
  }

}
