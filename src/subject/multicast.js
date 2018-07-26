/**
 * from: https://codeburst.io/rxjs-by-example-part-3-7f37ffa8b9d6
 * 
 * /description>
 * Turns out that thinking of a Subject as an Observer can be 
 * used in an interesting way. 
 * 
 * By subscribing a Subject to an Observable, we can multicast the Observable’s events.
 * </description>
 * 
 * <output>
 * observer A: 1
 * observer B: 1
 * observer A: 2
 * observer B: 2
 * observer A: 3
 * observer B: 3
 * </output>
 */

 // eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const myObservable = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

const mySubject = new Subject();
mySubject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});

mySubject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});

myObservable.subscribe(mySubject);