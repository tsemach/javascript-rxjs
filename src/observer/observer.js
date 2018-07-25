/*
 * from: https://codeburst.io/rxjs-by-example-part-2-8c6eda15bd7f
 * 
 * <description>
 * The complete syntax allows you to pass an object (called an Observer)
 * to subscribe with optional properties next, error, and complete. 
 * With this in mind, it now makes sense that we named the single 
 * parameter (observer) of the function supplied to create as we did.
 * 
 * note: Once the execution calls either complete or error 
 * any further calls to next, complete, or error are ignored.
 * </description>
 * 
 * <output>
 * </output>
 */
// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
const myObservable = Observable.create((observer) => {
  console.log('Hello');
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});
myObservable.subscribe({
  next: o => console.log(o),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});
myObservable.subscribe({
  next: o => console.log(o),
  error: err => console.log(err),
  complete: () => console.log('complete'),
});