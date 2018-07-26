/**
 * from: https://codeburst.io/rxjs-by-example-part-3-7f37ffa8b9d6
 * 
 * <description>
 * Much like the relationship between DOM elements their event-listeners, 
 * Subjects have their Observers. 
 * Each event, in this case the calls to next, results in the execution
 * of each of the Observer’s next function. 
 * 
 * In this case RxJS is doing something familiar 
 * for us; manages a list of Observers.
 * 
 * Every Subject is an Observable. Given a Subject, you can subscribe to it, 
 * providing an Observer, which will start receiving values normally. 
 * From the perspective of the Observer, it cannot tell whether 
 * the Observable execution is coming from a plain unicast Observable or a Subject…
 * 
 * Every Subject is an Observer. It is an object with the methods next(v), error(e), and complete()…
 * </description>
 * 
 * <output>
 * observer A: 1
 * observer B: 1
 * observer A: 2
 * observer B: 2
 * </output>
 */

 // eslint no-console: "off"
import { Subject } from 'rxjs/Subject';

const mySubject = new Subject();

mySubject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});

mySubject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});
mySubject.next(1);
mySubject.next(2);