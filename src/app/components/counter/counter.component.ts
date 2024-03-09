import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() message!:string
  @Output() event: EventEmitter<number> = new EventEmitter()
  $counter: Signal<number>
  constructor(private readonly _counterService: CounterService) {
    this.$counter = _counterService.$counter
  }

  emitCounterValue(){
    this.event.emit(this.$counter())
  }
}
