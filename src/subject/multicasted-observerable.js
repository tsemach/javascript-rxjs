/**
 * from:
 * 
 * <description>
 * We can fix the earlier example by using the multicast operator
 * to convert a regular Observerable to a Multicasted Observerable
 * that behaves as we expect it to. In the following example, 
 * <description>
 * 
 * <output>
 * 1
 * observer A: 1
 * 2
 * observer A: 2
 * 3
 * observer A: 3
 * observer B: 3
 * 4
 * observer A: 4
 * observer B: 4
 * 5
 * observer B: 5
 * 6
 * observer B: 6
 * 7
 * observer B: 7
 * </output>  
 */

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/multicast';

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

const myMultiObservable = myObservable
  .multicast(new Subject())
  .refCount();

const mySubscriptionA = myMultiObservable.subscribe({
  next: o => console.log(`observer A: ${o}`),
});

setTimeout(() => {
  const mySubscriptionB = myMultiObservable.subscribe({
    next: o => console.log(`observer B: ${o}`),
  });
  setTimeout(() => mySubscriptionB.unsubscribe(), 5000);
}, 3000);
setTimeout(() => mySubscriptionA.unsubscribe(), 5000);