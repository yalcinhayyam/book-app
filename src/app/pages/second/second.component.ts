import { Component, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CounterComponent } from "../../components/counter/counter.component";

@Component({
    selector: 'app-second',
    standalone: true,
    templateUrl: './second.component.html',
    styleUrl: './second.component.scss',
    imports: [CounterComponent]
})
export class SecondComponent {

}
