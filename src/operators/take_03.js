

/**
 * from: https://www.learnrxjs.io/operators/filtering/take.html
 * 
 * <description>
 * RxJS v6+
 * When you are interested in only the first set number of emission, you want to use take. 
 * Maybe you want to see what the user first clicked on when he/she first entered the page, 
 * you would want to subscribe to the click event and just take the first emission. 
 * There is a race and you want to observe the race, but you're only interested in the 
 * first who crosses the finish line. This operator is clear and straight forward, you 
 * just want to see the first n numbers of emission to do whatever it is you need.
 * </description>
 * 
 * <output>
 * 0
 * 1
 * 2
 * 3
 * 4
 * </output>
 */
// RxJS v6+
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

//emit value every 1s
const interval$ = interval(1000);

// take the first 5 emitted values
const example = interval$.pipe(take(5));

// output: 0,1,2,3,4
const subscribe = example.subscribe(val => console.log(val));