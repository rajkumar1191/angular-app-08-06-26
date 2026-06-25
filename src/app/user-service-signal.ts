import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceSignal {
  baseUrl = 'https://jsonplaceholder.typicode.com/';
  usersSignal = signal<any[]>([]);
  loadingSignal = signal(false);
  errorSignal = signal<string | null>(null);

  users = this.usersSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  userCount = computed(() => this.usersSignal().length);

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.http.get(`${this.baseUrl}/users`).subscribe({
      next: (data: any) => {
        console.log(data)
        this.usersSignal.set(data);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set('Failed to load');
        this.loadingSignal.set(false);
      },
    });
  }

  addUsers(user: any) {
    this.usersSignal.update((users: any) => [...users, user]);
  }

  deleteUser(id: string) {
    this.usersSignal.update((users: any) => users.filter((u: any) => u.id != id));
  }
}
