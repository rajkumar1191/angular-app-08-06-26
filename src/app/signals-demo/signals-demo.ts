import { Component, computed, effect, signal } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css',
})
export class SignalsDemoComponent {
  sweetCount = signal(1);
  sweetPrice = signal(5);
  pocketMoney = signal(30);

  totalBill = computed(() => this.sweetCount() * this.sweetPrice());
  moneyLeft = computed(() => this.pocketMoney() - this.totalBill());
  shoppingMessage = computed(() => {
    if (this.moneyLeft() < 0) {
      return 'Oops! You picked more sweets than your money can buy.';
    }

    if (this.moneyLeft() === 0) {
      return 'Perfect! You used all your money exactly.';
    }

    return 'Nice! You can buy these sweets and still keep some money.';
  });

  constructor(public user: UserService) {
    console.log(user.getDate());
    effect(() => {
      console.log(`Signals demo: sweet count is now ${this.sweetCount()}`);
    });
  }

  addSweet(): void {
    this.sweetCount.update((count) => count + 1);
  }

  removeSweet(): void {
    this.sweetCount.update((count) => Math.max(0, count - 1));
  }

  resetShop(): void {
    this.sweetCount.set(1);
  }
}



