import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  addUsers(user: any) {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  updateUsers(user: any, id: string) {
    return this.http.put(`${this.baseUrl}/users/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  getDate() {
    return new Date();
  }

  // interceptor
}
