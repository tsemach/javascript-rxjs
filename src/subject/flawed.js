/**
 * from: https://codeburst.io/rxjs-by-example-part-3-7f37ffa8b9d6
 * 
 * <description>
 * Let us carry our interesting example to the next step and having
 * the Observers unsubscribe from the Subject. 
 * 
 * Unsubscribing an Observer from a Subject essentially removes 
 * it from it’s list of Observers. But… So, even when all the 
 * Observers to Subject unsubscribe, myObservable still is 
 * churning out events (because we did not unsubscribe the Subject itself).
 * 
 * In the following example, counter is incremented indefinitely.
 * </description
 * 
 * <output>
 * 1
 * observer A: 1
 * observer B: 1
 * 2
 * observer A: 2
 * observer B: 2
 * 3
 * observer B: 3
 * 4
 * observer B: 4
 * 5
 * 6
 * 7
 * 8
 * .
 * .
 * .
 * </output>
 */

 /* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const myObservable = Observable.create((observer) => {
  let counter = 1;
  const intervalID = setInterval(() => {
    console.log(counter);
    observer.next(counter);
    counter += 1;
  }, 1000);
  return () => {
    clearInterval(intervalID);
  };
});

const mySubject = new Subject();
const mySubscriptionA = mySubject.subscribe({
  next: o => console.log(`observer A: ${o}`),
});

const mySubscriptionB = mySubject.subscribe({
  next: o => console.log(`observer B: ${o}`),
});

myObservable.subscribe(mySubject);

setTimeout(() => mySubscriptionA.unsubscribe(), 3000);
setTimeout(() => mySubscriptionB.unsubscribe(), 5000);