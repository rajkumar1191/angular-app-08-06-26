import { Component, effect, OnInit, signal } from '@angular/core';
import { UserServiceSignal } from '../user-service-signal';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [JsonPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  userCount = signal(0);

  userData = signal<any>([]);

  constructor(private userService: UserServiceSignal) {
    effect(() => {
      this.userCount.set(this.userService.userCount());
      this.userData.set(this.userService.users());
    });
  }

  ngOnInit(): void {
    this.userService.fetchUsers();
    console.log(this.userService.users());
    this.userData.set(this.userService.users());
  }
}
