import { Component, Signal } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";

@Component({
    selector: 'app-first',
    standalone: true,
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss',
    imports: [CounterComponent]
})
export class FirstComponent {
    printEventValue(e: number){
        console.log(e)
    }
}
