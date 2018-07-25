/**
 * from: 
 * 
 * <description>
 * by using Observables we can use RxJS operators to 
 * perform common tasks, e.g., map and filter that 
 * act much like the similarly named Array operators.
 * </description>
 * 
 * <output>
 * MY_OBSERVABLE
 * 1
 * 2
 * 3
 * 4
 * MULTIPLY_OBSERVABLE
 * 2
 * 4
 * 6
 * 8
 * FILTER_OBSERVABLE
 * 1
 * 2
 * </output>
 */
// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const myObservable = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
});

const multiplyObservable = myObservable.map(o => o * 2);
const filterObservable = myObservable.filter(o => o < 3);

console.log('MY_OBSERVABLE');
myObservable.subscribe(o => console.log(o));

console.log('MULTIPLY_OBSERVABLE');
multiplyObservable.subscribe(o => console.log(o));

console.log('FILTER_OBSERVABLE');
filterObservable.subscribe(o => console.log(o));


