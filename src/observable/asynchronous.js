/*
 * from: https://codeburst.io/rxjs-by-example-part-1-ff7f1530071c
 *
 * <description>
 * From its behavior, an Observable, e.g. myObservable, is like an Promise; 
 * it provides a convenient way of working with asynchronous events.
 * </description>
 *
 * <output>
 * RxJS
 * Normal
 * </output>
 */
// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';

// normal
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Normal'), 3000);
});
myPromise.then(o => console.log(o));

// rxjs
const myObservable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next('RxJS');
    observer.complete();
  }, 3000);
});
myObservable.subscribe(o => console.log(o));

