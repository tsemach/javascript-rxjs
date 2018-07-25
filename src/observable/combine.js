/*
 * from: https://codeburst.io/rxjs-by-example-part-1-ff7f1530071c
 *
 * <description>
 * Given three asynchronous operations, we perform them back to back; 
 * logging their output to the console with the results (each pair of lines 
 * appearing one second after the previous pair).
 *
 * From its behavior, an Observable, e.g. myObservable, is like a Promise chain; it, 
 * however, is implemented as a single object.
 * </description>
 *
 * <output>
 * RxJS A
 * 	Normal A
 * 	RxJS B
 * 	Normal B
 * 	RxJS C
 * 	Normal C
 * </output>
 */
/* eslint no-console: "off" */
import { Observable } from 'rxjs/Observable';
// NORMAL
const asyncA = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal A'), 1000);
});
const asyncB = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal B'), 1000);
});
const asyncC = () => new Promise((resolve) => {
  setTimeout(() => resolve('Normal C'), 1000);
});
asyncA()
  .then(o => console.log(o))
  .then(asyncB)
  .then(o => console.log(o))
  .then(asyncC)
  .then(o => console.log(o));
// RXJS
const myObservable = Observable.create((observer) => {
  setTimeout(() => {
    observer.next('RxJS A');
    setTimeout(() => {
      observer.next('RxJS B');
      setTimeout(() => {
        observer.next('RxJS C');
        observer.complete();
      }, 1000);
    }, 1000);
  }, 1000);
});
myObservable.subscribe(o => console.log(o));
