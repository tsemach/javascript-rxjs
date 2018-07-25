/**
 * from: https://codeburst.io/rxjs-by-example-part-1-ff7f1530071c
 *
 * <description>
 * From its behavior, an Observable, e.g. myObservable, is like an Array; 
 * it has a notion of an order.
 * </description>
 *
 * <output>
 * Normal
 * 1 + !!!
 * 2 + !!!
 * 3 + !!!
 * RxJS
 * 1 + !!!
 * 2 + !!!
 * 3 + !!!
 * </output>
 */

// eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

const myArray = [1, 2, 3];

// normal
console.log('Normal');
const myNewArray = myArray.map(o => `${o.toString()} + !!!`);
myNewArray.forEach(o => console.log(o));

// rxjs
console.log('RxJS');
const myObservable = Observable.from(myArray).map(o => `${o.toString()} + !!!`);
myObservable.subscribe(o => console.log(o));
