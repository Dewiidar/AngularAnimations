import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('changeState', [
            state('first', style({
                backgroundColor: 'red'
            })),
            state('second', style({
                backgroundColor: 'green'
            })),
            state('parallel', style({
                backgroundColor: 'yellow'
            })),
            transition('* => first', animate('800ms 1000ms ease-in-out')),
            transition('* => second',
                animate('1600ms ease-in-out', keyframes([
                    style({transform: 'scale(1)', offset: .2}),
                    style({transform: 'scale(2)', offset: .4}),
                    style({transform: 'scale(.5)', offset: .7}),
                    style({transform: 'scale(2)', offset: .9})
            ]))),
            transition('* => parallel', [
                group([
                    animate('1000ms ease-in-out', style({
                        backgroundColor: 'purple'
                    })),
                    animate('2000ms ease-in-out', style({
                        transform: 'scale(2)'
                    }))
                ])
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    currentState: string;

    constructor() {
    }

    ngOnInit() {
        this.currentState = 'first';
    }

    changeState(value: string): void {
        this.currentState = value;
    }

    animationBegin(event: Event) {
        console.log(event);
    }

    animationEnd(event: Event) {
        console.log(event);
    }
}
