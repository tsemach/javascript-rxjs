/**
 * from: https://codeburst.io/rxjs-by-example-part-2-8c6eda15bd7f
 * 
 * <description>
 * Observables worked with multiple subscriptions (calls to subscribe). 
 * As opposed to Promise the observable it is important to observe 
 * that each subscription triggers a separate call to the 
 * function supplied to create.
 * 
 * Another subtle difference with Promises is that the subscribe happens
 * synchronously whereas the then happens asynchronously 
 * (notice the two ones at the bottom of the output).
 * </description>
 * 
 * <output>
 * Hello from Promise
 * Hello from Observable
 * 1
 * 2
 * 3
 * Hello from Observable
 * 1
 * 2
 * 3
 * 1
 * 1
 * </output>
 */

// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
// PROMISE
const myPromise = new Promise((resolve) => {
  console.log('Hello from Promise');
  resolve(1);
});
myPromise.then(o => console.log(o));
myPromise.then(o => console.log(o));
// OBSERVABLE
const myObservable = Observable.create((observer) => {
  console.log('Hello from Observable');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
myObservable.subscribe(o => console.log(o));
myObservable.subscribe(o => console.log(o));