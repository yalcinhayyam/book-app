import { Component, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  $counter: Signal<number>
  constructor(private readonly _counterService: CounterService ){
    this.$counter = _counterService.$counter
  }

  increase (){
    this._counterService.increase(1)
  }
  decrease (){
    this._counterService.decrease(1)
  }

}
