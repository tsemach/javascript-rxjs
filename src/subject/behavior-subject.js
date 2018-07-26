/**
 * from: https://codeburst.io/rxjs-by-example-part-4-939603ed3fac
 * 
 * <description>
 * Because it is a Subject, each subscription simply adds itself
 * to the list of callbacks (solves first problem). 
 * 
 * The bonus is that BehaviorSubject also will trigger the 
 * callback during the subscribe as the following example:
 * </description>
 * 
 * <output>
 * observerA: 0
 * observerA: 1
 * observerA: 2
 * observerB: 2
 * observerA: 3
 * observerB: 3
 * </output>
 */

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const mySubject = new BehaviorSubject(0);
mySubject.subscribe({
  next: o => console.log(`observerA: ${o}`),
});

mySubject.next(1);
mySubject.next(2);
mySubject.subscribe({
  next: o => console.log(`observerB: ${o}`),
});
mySubject.next(3);