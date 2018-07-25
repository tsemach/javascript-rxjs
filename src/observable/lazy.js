/**
 * from: https://codeburst.io/rxjs-by-example-part-2-8c6eda15bd7f
 * 
 * <description>
 * It is important to observe that Observables, unlike Promises, are lazy, 
 * i.e., the function passed to create is not executed until it is subscribed to. 
 * For example the following code only outputs Hello from Promise.
 * </description>
 * 
 * <output>
 * Hello from Promise.
 * </output>
 */

 // eslint no-console: "off" 
import { Observable } from 'rxjs/Observable';
// eslint-disable-next-line
new Promise((resolve) => {
  console.log('Hello from Promise');
  resolve(1);
});
Observable.create((observer) => {
  console.log('Hello from Observable');
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

