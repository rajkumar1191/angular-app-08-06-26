import { inject, Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

export interface DemoUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class DemoUserService {
  getUser(id: number): Observable<DemoUser> {
    return of({
      id,
      name: id === 2 ? 'Grace Hopper' : 'Ada Lovelace',
      email: id === 2 ? 'grace@example.com' : 'ada@example.com',
      role: id === 2 ? 'Admiral and computer scientist' : 'Mathematician',
    }).pipe(delay(600));
  }
}

export const userResolver: ResolveFn<DemoUser> = (route) => {
  const id = Number(route.paramMap.get('id') ?? 1);
  return inject(DemoUserService).getUser(id);
};
