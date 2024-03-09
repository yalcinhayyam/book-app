import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private readonly $_counter = signal<number>(0)

  get $counter(): Signal<number> {
    return this.$_counter
  }
  increase(value: number) {
    this.$_counter.update((current) => current + value!)
  }
  decrease(value: number) {
    this.$_counter.update((current) => current - value!)
  }
}
